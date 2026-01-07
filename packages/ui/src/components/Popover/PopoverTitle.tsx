import React from 'react';
import { cn } from '@/utils/cn';
import { usePopoverContext } from '@/components/Popover/PopoverContext.tsx';

export const PopoverTitle = ({
  className,
  id,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  const { titleId } = usePopoverContext();
  
  return (
    <h3
      id={id || titleId}
      className={cn('text-sm font-semibold', className)}
      {...props}
    />
  );
};

