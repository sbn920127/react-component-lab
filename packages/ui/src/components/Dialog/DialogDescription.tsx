import React from 'react';
import { cn } from '@/utils/cn.ts';

export const DialogDescription = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn('text-sm text-slate-500', className)} {...props} />;
};
