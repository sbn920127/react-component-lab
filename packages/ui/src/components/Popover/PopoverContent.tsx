import React from 'react';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';
import { FloatingFocusManager, useMergeRefs } from '@floating-ui/react';
import { cn } from '@/utils/cn.ts';

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** 
   * 當沒有使用 Popover.Title 時，必須提供 aria-label 作為可訪問名稱
   * 這是 ARIA 規範要求：role="dialog" 必須有一個可訪問的名稱
   */
  'aria-label'?: string;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, style, children, 'aria-label': ariaLabel, ...props }, propRef) => {
    const {
      context: floatingContext,
      floatingStyles,
      getFloatingProps,
      refs,
      modal,
      titleId,
      descriptionId,
    } = usePopoverContext();

    const ref = useMergeRefs([refs.setFloating, propRef]);

    // ARIA 規範：role="dialog" 必須有一個可訪問的名稱
    // 優先使用 aria-label（如果提供），否則使用 aria-labelledby（假設會使用 Popover.Title）
    // 注意：如果設置了 aria-labelledby 但沒有對應的元素，會導致 ARIA 違規
    // 所以如果提供了 aria-label，優先使用它；否則使用 titleId（假設會使用 Popover.Title）
    const hasAriaLabel = Boolean(ariaLabel);
    const ariaLabelledBy = !hasAriaLabel ? titleId : undefined;
    const ariaLabelValue = hasAriaLabel ? ariaLabel : undefined;

    // FloatingFocusManager: 這是 A11y 神器
    // 它確保 Tab 鍵不會跑出 Popover (如果是 modal) 或順序正確
    return (
      <FloatingFocusManager context={floatingContext} modal={modal}>
        <div
          ref={ref}
          role="dialog"
          {...(ariaLabelledBy && { 'aria-labelledby': ariaLabelledBy })}
          {...(ariaLabelValue && { 'aria-label': ariaLabelValue })}
          {...(descriptionId && { 'aria-describedby': descriptionId })}
          aria-modal={modal ? 'true' : 'false'}
          style={{ ...floatingStyles, ...style }} // 這裡套用計算出來的 top/left
          className={cn(
            'z-50 rounded-md border border-slate-200 bg-white p-4 shadow-md outline-none',
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
