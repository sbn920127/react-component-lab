import React, { type ComponentPropsWithRef, type ElementType, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

/**
 * 定義樣式變體
 */
const buttonVariants = cva(
  // 基礎樣式 (所有按鈕都有的)
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      intent: {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
      },
      // 定義 size (尺寸)
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 py-2 px-4',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    // 設定預設值
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
);

/**
 * 定義 Props
 */
interface ButtonOwnProps<E extends ElementType> extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  as?: E; // 允許使用者傳入 'button', 'a', 或者 React Router 的 Link 組件
  className?: string;
}

/**
 * 結合原生 Props（包含 ref）
 */
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof ButtonOwnProps<E>>;

/**
 * 3. 實作組件
 * 使用泛型 <E> 來捕捉使用者傳入的標籤類型
 * 注意：對於 polymorphic 組件，ref 會自動包含在 ComponentPropsWithRef 中
 */
const ButtonComponent = <E extends ElementType = 'button'>(
  { as, children, className, intent, size, ...props }: ButtonProps<E>,
  ref: React.ComponentPropsWithRef<E>['ref']
) => {
  // 如果沒有傳 as，預設使用 'button'
  const Component = as || 'button';

  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ intent, size, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

// React.forwardRef 不直接支援泛型，需要使用類型斷言
export const Button = React.forwardRef(ButtonComponent as any) as unknown as <E extends ElementType = 'button'>(
  props: ButtonProps<E> & { ref?: React.ComponentPropsWithRef<E>['ref'] }
) => React.ReactElement;
