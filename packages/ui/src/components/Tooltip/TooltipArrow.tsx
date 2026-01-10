import React from 'react';
import { FloatingArrow } from '@floating-ui/react';
import { useTooltipContext } from '@/components/Tooltip/TooltipContext.tsx';
import { cn } from '@/utils/cn.ts';

// 排除 context 和 ref，因為這些會從 TooltipContext 中獲取
export type TooltipArrowProps = Omit<React.ComponentProps<typeof FloatingArrow>, 'context' | 'ref'>;

export const TooltipArrow = ({ className, ...props }: TooltipArrowProps) => {
  const { context, arrowRef } = useTooltipContext();

  return (
    <FloatingArrow
      ref={arrowRef}
      context={context}
      className={cn('fill-slate-900 stroke-slate-900', className)}
      {...props}
    />
  );
};
