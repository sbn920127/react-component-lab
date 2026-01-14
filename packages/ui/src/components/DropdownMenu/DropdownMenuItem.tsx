import React from 'react';
import { useListItem, useMergeRefs } from '@floating-ui/react';
import { useDropdownMenuContext } from '@/components/DropdownMenu/DropdownMenuContext.tsx';
import { cn } from '@/utils/cn';

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ children, className, disabled, onClick, ...props }, propRef) => {
    const { activeIndex, getItemProps, setOpen, elementsRef, labelsRef } = useDropdownMenuContext();

    const { ref: listItemRef, index } = useListItem({
      label: typeof children === 'string' ? children : null,
    });

    const isActive = activeIndex === index;

    const ref = useMergeRefs([
      listItemRef,
      propRef,
      (node: HTMLButtonElement | null) => {
        // 儲存每個 item 的 DOM 及其文字標籤
        if (index != null) {
          elementsRef.current[index] = node;
          labelsRef.current[index] =
            typeof children === 'string' ? children : (node?.textContent ?? null);
        }
      },
    ]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
      setOpen(false);
    };

    return (
      <button
        ref={ref}
        role="menuitem"
        tabIndex={index ? 0 : -1}
        disabled={disabled}
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
          // Active 狀態樣式 (取代 hover)
          isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        {...getItemProps({
          onClick: handleClick,
          ...props,
        })}
      >
        {children}
      </button>
    );
  }
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
