import React from 'react';
import { useListItem, useMergeRefs } from '@floating-ui/react';
import { useSelectContext } from '@/components/Select/SelectContext.tsx';
import { Check } from 'lucide-react';
import { cn } from '@/utils/cn.ts';

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ value: itemValue, children, className, disabled, ...props }, propRef) => {
    const {
      activeIndex,
      getItemProps,
      handleSelect,
      value: selectedValue,
      elementsRef,
      labelsRef,
    } = useSelectContext();

    const { ref: listItemRef, index } = useListItem();

    const isActive = activeIndex === index;
    const isSelected = selectedValue === itemValue;

    const ref = useMergeRefs([
      listItemRef,
      propRef,
      (node: HTMLDivElement | null) => {
        if (index !== null) {
          elementsRef.current[index] = node;
          labelsRef.current[index] =
            typeof children === 'string' ? children : (node?.textContent ?? null);
        }
      },
    ]);

    const handleClick = () => {
      if (disabled) return;
      // // 點擊時，把值(value)和顯示文字(children)傳回 Root
      handleSelect(itemValue, children);
    };

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
          isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
          disabled && 'pointer-events-none opacity-50',
          className
        )}
        {...getItemProps({
          onClick: handleClick,
          ...props,
        })}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {isSelected && <Check className="h-4 w-4" />}
        </span>
        <span className="truncate">{children}</span>
      </div>
    );
  }
);

SelectItem.displayName = 'SelectItem';
