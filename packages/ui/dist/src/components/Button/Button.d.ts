import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
/**
 * 定義樣式變體 (這就是 CVA 的核心)
 */
declare const buttonVariants: (props?: ({
    intent?: "primary" | "secondary" | "danger" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * 定義我們自己的 Props
 */
interface ButtonOwnProps<E extends ElementType> extends VariantProps<typeof buttonVariants> {
    children: ReactNode;
    /**
     * 允許使用者傳入 'button', 'a', 或者 React Router 的 Link 組件
     * 預設為 'button'
     */
    as?: E;
    className?: string;
}
/**
 * 結合原生 Props
 */
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;
/**
 * 3. 實作組件
 * 使用泛型 <E> 來捕捉使用者傳入的標籤類型
 */
export declare const Button: <E extends ElementType = "button">({ as, children, className, intent, size, ...props }: ButtonProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
