import React from 'react';
import { cn } from '@/utils/cn.ts';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode; // 左側圖示
  endIcon?: React.ReactNode; // 右側圖示
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, disabled, ...props }, ref) => {
    return (
      <div
        className={cn(
          // --- 1. 假外框 ---
          // 負責：高度、邊框、背景、圓角、Focus 光圈
          'ring-offset-background flex h-10 w-full items-center rounded-md border border-slate-200 bg-white px-3 text-sm',
          // 這裡用 focus-within，當內部的 input 被聚焦時，外層 div 發光
          'focus-within:ring-2 focus-within:ring-slate-950 focus-within:ring-offset-2',
          // 停用狀態樣式
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        {/* 左側圖示 */}
        {startIcon && <div className="mr-2 flex items-center text-slate-500">{startIcon}</div>}

        {/* --- 2. 透明 Input --- */}
        <input
          type={type}
          disabled={disabled}
          className={cn(
            // 拿掉所有邊框、背景，讓它填滿容器
            'flex h-full w-full bg-transparent p-0 placeholder:text-slate-500',
            // 拿掉原生 focus outline，因為外層 div 已經處理了
            'file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none',
            disabled && 'cursor-not-allowed'
          )}
          ref={ref}
          {...props}
        />

        {/* 右側圖示 (例如：眼睛 icon) */}
        {endIcon && <div className="ml-2 flex items-center text-slate-500">{endIcon}</div>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
