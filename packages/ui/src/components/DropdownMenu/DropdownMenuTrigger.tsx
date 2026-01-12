import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useDropdownMenuContext } from '@/components/DropdownMenu/DropdownMenuContext.tsx';
import { Button } from '@/components/Button';

interface DropdownMenuTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const DropdownMenuTrigger = React.forwardRef<HTMLElement, DropdownMenuTriggerProps>(
  ({ children, asChild = false, ...props }, propRef) => {
    const { refs, getReferenceProps, open } = useDropdownMenuContext();
    const floatingRef = refs.setReference;

    if (asChild && React.isValidElement(children)) {
      const childRef = (children as any).ref;
      const ref = useMergeRefs([floatingRef, propRef, childRef]);
      const referenceProps = getReferenceProps({
        ref,
        ...props,
        ...(children.props as Record<string, unknown>),
      });
      return React.cloneElement(children, {
        ...referenceProps,
        'data-state': open ? 'open' : 'closed',
      } as any);
    }

    const mergedRef = useMergeRefs([floatingRef, propRef]);

    return (
      <Button
        as="button"
        type="button"
        data-state={open ? 'open' : 'closed'}
        {...getReferenceProps({
          ...props,
          ref: mergedRef,
        })}
      >
        {children}
      </Button>
    );
  }
);
