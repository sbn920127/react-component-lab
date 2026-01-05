import React, { forwardRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';
import { Button } from '@/components/Button';

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(
  ({ children, asChild = false, ...props }, propRef) => {
    const { refs, getReferenceProps, open } = usePopoverContext();

    // 如果不是 asChild，則建立一個預設的按鈕元素
    if (asChild && React.isValidElement(children)) {
      const childRef = (children as any).ref;
      const ref = useMergeRefs([refs.setReference, propRef, childRef]);
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

    const mergedRef = useMergeRefs([refs.setReference, propRef]);

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
