import React from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';

// 排除 context 和 ref，因為這些會從 PopoverContext 中獲取
export type PopoverArrowProps = Omit<React.ComponentProps<typeof FloatingArrow>, 'context' | 'ref'>;

export const PopoverArrow = (props: PopoverArrowProps) => {
  const { context, arrowRef } = usePopoverContext();

  return (
    <FloatingArrow
      ref={arrowRef}
      context={context}
      fill="white"
      stroke="#e2e8f0"
      strokeWidth={1}
      {...props}
    />
  );
};
