import React from 'react';
import { cn } from '@/utils/cn.ts';

export const ComboboxEmpty = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('py-6 text-center text-sm text-slate-500', className)} {...props}>
      {children}
    </div>
  );
};
