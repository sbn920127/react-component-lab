import React from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';
import { cn } from '@/utils/cn.ts';

// 排除 context 和 ref，因為這些會從 PopoverContext 中獲取
export type PopoverArrowProps = Omit<React.ComponentProps<typeof FloatingArrow>, 'context' | 'ref'>;

export const PopoverArrow = ({ className, ...props }: PopoverArrowProps) => {
  const { context, arrowRef } = usePopoverContext();

  return (
    <FloatingArrow
      ref={arrowRef}
      context={context}
      className={cn('fill-white stroke-slate-200', className)}
      strokeWidth={1}
      {...props}
    />
  );
};
