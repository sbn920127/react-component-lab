import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
/**
 * 1. 定義我們自己的 Props
 */
interface ButtonOwnProps<E extends ElementType> {
    children: ReactNode;
    /**
     * 允許使用者傳入 'button', 'a', 或者 React Router 的 Link 組件
     * 預設為 'button'
     */
    as?: E;
    className?: string;
}
/**
 * 2. 結合原生 Props
 * 這裡用了 TS 的高級型別技巧：
 * - 拿出 'as' 指定的標籤的原生 Props (例如 'a' 標籤會有 href)
 * - 排除掉我們已經定義的 Props (避免衝突)
 */
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;
/**
 * 3. 實作組件
 * 使用泛型 <E> 來捕捉使用者傳入的標籤類型
 */
export declare const Button: <E extends ElementType = "button">({ as, children, className, ...props }: ButtonProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
