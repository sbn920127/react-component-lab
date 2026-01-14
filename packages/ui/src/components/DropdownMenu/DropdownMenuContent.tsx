import React from 'react';
import { FloatingFocusManager, FloatingPortal, useMergeRefs } from '@floating-ui/react';
import { useDropdownMenuContext } from '@/components/DropdownMenu/DropdownMenuContext.tsx';
import { cn } from '@/utils/cn.ts';

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const DropDownMenuContent = React.forwardRef<HTMLElement, DropdownMenuContentProps>(
  ({ className, style, children, ...props }, propRef) => {
    const { context, floatingStyles, getFloatingProps, refs, open } = useDropdownMenuContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    if (!open) return null;

    return (
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={ref}
            style={{ ...floatingStyles, ...style }}
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 shadow-md',
              'animate-in fade-in-0 zoom-in-95',
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

DropDownMenuContent.displayName = 'DropDownMenuContent';
