import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { Button } from '@/components/Button';
import { useSelectContext } from '@/components/Select/SelectContext.tsx';
import { cn } from '@/utils/cn.ts';
import { ChevronDown } from 'lucide-react';

type SelectTriggerProps = React.ComponentProps<typeof Button>;

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, ...props }, propRef) => {
    const { refs, getReferenceProps, isOpen } = useSelectContext();
    const ref = useMergeRefs([refs.setReference, propRef]);

    return (
      <Button
        ref={ref}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        variant="outline"
        className={cn('w-full justify-between px-3 font-normal', className)}
        {...getReferenceProps(props)}
      >
        {children}
        {/* 右側固定顯示下拉箭頭 */}
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';
