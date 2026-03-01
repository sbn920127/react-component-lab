import React from 'react';
import { useListItem, useMergeRefs } from '@floating-ui/react';
import { useComboboxContext } from '@/components/Combobox/ComboboxContext.tsx';
import { cn } from '@/utils/cn.ts';

interface ComboboxItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
  onSelect?: () => void; // 允許外部定義選中後的額外行為
}

export const ComboboxItem = React.forwardRef<HTMLDivElement, ComboboxItemProps>(
  ({ children, disabled, onSelect, className, onClick, ...props }, propRef) => {
    const { activeIndex, getItemProps, setOpen, elementsRef, labelsRef } = useComboboxContext();

    const { ref: listItemRef, index } = useListItem({
      label: typeof children === 'string' ? children : null,
    });
    const isActive = activeIndex === index;

    const ref = useMergeRefs([
      listItemRef,
      propRef,
      (node: HTMLElement | null) => {
        if (index !== null) {
          elementsRef.current[index] = node;
          labelsRef.current[index] =
            typeof children === 'string' ? children : (node?.textContent ?? null);
        }
      },
    ]);

    const handleSelect = () => {
      onSelect?.();
      // 注意：Combobox 的 Input 值更新通常由外部控制 (onInputChange)
      // 這裡只要確保選單會關閉即可
      setOpen(false);
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isActive}
        aria-disabled={disabled}
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
          isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        {...getItemProps({
          onClick: (e) => {
            onClick?.(e as React.MouseEvent<HTMLDivElement>);
            handleSelect();
          },
          // 按 Enter 也要觸發
          onKeyDown: (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSelect();
            }
          },
          ...props,
        })}
      >
        {children}
      </div>
    );
  }
);

ComboboxItem.displayName = 'ComboboxItem';
