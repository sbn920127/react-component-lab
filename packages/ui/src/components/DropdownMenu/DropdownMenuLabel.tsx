import React from 'react';
import { cn } from '@/utils/cn.ts';

export const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('px-2 py-1.5 text-xs font-semibold text-slate-500', className)}
    {...props}
  />
));

DropdownMenuLabel.displayName = 'DropdownMenuLabel';
