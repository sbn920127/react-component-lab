import React, { useEffect } from 'react';
import { useSelectContext } from '@/components/Select/SelectContext.tsx';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/utils/cn.ts';

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className, style, children, ...props }, propRef) => {
    const { context, floatingStyles, getFloatingProps, refs, isOpen } = useSelectContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    // 當選單打開時，鎖定背景滾動
    useEffect(() => {
      if (isOpen) {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={ref}
            style={{ ...floatingStyles, ...style }}
            className={cn(
              'animate-in fade-in-0 zoom-in-95 z-50 min-w-[8rem] max-h-[300px] overflow-y-auto overflow-x-hidden rounded-md border border-slate-200 bg-white p-1 shadow-md',
              className
            )}
            {...getFloatingProps(props)}
            role="listbox"
          >
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);

SelectContent.displayName = 'SelectContent';
