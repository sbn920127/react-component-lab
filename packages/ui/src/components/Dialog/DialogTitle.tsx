import React from 'react';
import { cn } from '@/utils/cn.ts';
import { useDialogContext } from '@/components/Dialog/DialogContext.tsx';

export const DialogTitle = ({
  className,
  id,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadingElement>) => {
  const { titleId } = useDialogContext();
  
  return (
    <h2
      id={id || titleId}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  );
};
