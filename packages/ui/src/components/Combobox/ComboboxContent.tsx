import React from 'react';
import { FloatingFocusManager, useMergeRefs, FloatingPortal } from '@floating-ui/react';
import { useComboboxContext } from '@/components/Combobox/ComboboxContext.tsx';
import { cn } from '@/utils/cn.ts';

interface ComboboxContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ComboboxContent = React.forwardRef<HTMLDivElement, ComboboxContentProps>(
  ({ children, className, style, ...props }, propRef) => {
    const { context, floatingStyles, getFloatingProps, refs, open } = useComboboxContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    if (!open) return null;

    return (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
          <div
            ref={ref}
            style={{ ...floatingStyles, ...style }}
            className={cn(
              'animate-in fade-in-0 zoom-in-95 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 shadow-md',
              className
            )}
            {...getFloatingProps(props)}
          >
            {children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    );
  }
);

ComboboxContent.displayName = 'ComboboxContent';
