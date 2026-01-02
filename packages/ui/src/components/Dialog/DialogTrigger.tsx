import React, { cloneElement, isValidElement } from 'react';
import { useDialogContext } from '@/components/Dialog/DialogContext.tsx';

interface DialogTriggerProps {
  children: React.ReactNode;
  asChildren?: boolean; // Radix UI 的概念，這裡我們先簡化，強制把 click 事件綁在 children 上
}

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
  const { onOpenChange } = useDialogContext();

  // 這裡使用 cloneElement 是為了不增加額外的 DOM 節點 (比如包一層 div)
  // 我們直接把 onClick 注入到 children (例如 <Button>) 身上
  if (isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        const originalOnClick = (children.props as any).onClick;
        originalOnClick?.(e);

        // 觸發開啟
        onOpenChange(true);
      },
    });
  }

  // 防呆：如果 children 不是 React Element (例如純文字)，就包個 span 處理
  return <span onClick={() => onOpenChange(true)}>{children}</span>;
};
