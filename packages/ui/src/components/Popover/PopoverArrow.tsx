import React from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';

export const PopoverArrow = (props: React.ComponentProps<typeof FloatingArrow>) => {
  const { context: _, ref: __, ...restProps } = props;
  const { context, arrowRef } = usePopoverContext();

  return (
    <FloatingArrow
      ref={arrowRef}
      context={context}
      fill="white"
      stroke="#e2e8f0"
      strokeWidth={1}
      {...restProps}
    />
  );
};
