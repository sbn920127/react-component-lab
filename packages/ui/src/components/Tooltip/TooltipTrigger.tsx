import React, { forwardRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { Button } from '@/components/Button';
import { useTooltipContext } from '@/components/Tooltip/TooltipContext.tsx';

interface TooltipTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const TooltipTrigger = forwardRef<HTMLElement, TooltipTriggerProps>(
  ({ children, asChild = false, ...props }, propRef) => {
    const { refs, getReferenceProps, open } = useTooltipContext();

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

TooltipTrigger.displayName = 'TooltipTrigger';
