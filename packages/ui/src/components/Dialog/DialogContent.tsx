import React from 'react';
import { X } from 'lucide-react';
import { useDialogContext } from '@/components/Dialog/DialogContext.tsx';
import { cn } from '@/utils/cn';

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const DialogContent = ({ className, children, ...props }: DialogContentProps) => {
  const { onOpenChange } = useDialogContext();

  return (
    <div
      // 阻止冒泡：點擊內容區域時，不要觸發 Overlay 的關閉事件
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'animate-in fade-in-90 zoom-in-95 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 shadow-lg sm:max-w-lg sm:rounded-lg',
        className
      )}
      {...props}
    >
      {children}

      {/* 內建一個絕對定位的關閉按鈕，這符合大多數 UI 規範 */}
      <button
        onClick={() => onOpenChange(false)}
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};
