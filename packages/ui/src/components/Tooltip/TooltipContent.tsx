import React from 'react';
import { useTooltipContext } from '@/components/Tooltip/TooltipContext.tsx';
import { FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/utils/cn.ts';

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  sideOffset?: number; // 允許微調距離
}

export const TooltipContent = React.forwardRef(
  ({ children, className, sideOffset = 3, style, ...props }: TooltipContentProps, propRef) => {
    const { floatingStyles, getFloatingProps, refs, open } = useTooltipContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    return (
      <FloatingPortal>
        {open && (
          <div
            ref={ref}
            style={{ ...floatingStyles, ...style }}
            className={cn(
              'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-50',
              className
            )}
            {...getFloatingProps(props)}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';
