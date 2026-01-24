import React from 'react';
import { cn } from '@/utils/cn.ts';

export const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('-mx-1 my-1 h-px bg-slate-100', className)} {...props} />
  )
);

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';
