import React from 'react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';
import { FloatingFocusManager, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/utils/cn.ts';

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, style, children, ...props }, propRef) => {
    const {
      context: floatingContext,
      floatingStyles,
      getFloatingProps,
      refs,
      modal,
    } = usePopoverContext();

    const ref = useMergeRefs([refs.setFloating, propRef]);

    // FloatingFocusManager: 這是 A11y 神器
    // 它確保 Tab 鍵不會跑出 Popover (如果是 modal) 或順序正確
    return (
      <FloatingFocusManager context={floatingContext} modal={modal}>
        <div
          ref={ref}
          style={{ ...floatingStyles, ...style }} // 這裡套用計算出來的 top/left
          className={cn(
            'z-50 w-72 rounded-md border border-slate-200 bg-white p-4 shadow-md outline-none',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className
          )}
          {...getFloatingProps(props)}
        >
          {children}
        </div>
      </FloatingFocusManager>
    );
  }
);

PopoverContent.displayName = 'PopoverContent';
