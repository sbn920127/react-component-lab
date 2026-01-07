import React from 'react';
import { cn } from '@/utils/cn';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';

export const PopoverDescription = ({
  className,
  id,
  ...props
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  const { descriptionId } = usePopoverContext();
  
  return (
    <p
      id={id || descriptionId}
      className={cn('text-sm text-slate-500', className)}
      {...props}
    />
  );
};

