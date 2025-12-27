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
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

/**
 * 3. 實作組件
 * 使用泛型 <E> 來捕捉使用者傳入的標籤類型
 */
export const Button = <E extends ElementType = 'button'>({
                                                             as,
                                                             children,
                                                             className,
                                                             ...props
                                                         }: ButtonProps<E>) => {
    // 如果沒有傳 as，預設使用 'button'
    const Component = as || 'button';

    return (
        <Component
            className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className || ''}`}
            {...props}
        >
            {children}
        </Component>
    );
};
