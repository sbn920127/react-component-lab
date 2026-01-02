import React from 'react';
import { cn } from '@/utils/cn.ts';

export const DialogTitle = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
  );
};
