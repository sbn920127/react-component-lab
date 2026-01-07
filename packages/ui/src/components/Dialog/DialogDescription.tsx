import React from 'react';
import { cn } from '@/utils/cn.ts';
import { useDialogContext } from '@/components/Dialog/DialogContext.tsx';

export const DialogDescription = ({
  className,
  id,
  ...props
}: React.HtmlHTMLAttributes<HTMLParagraphElement>) => {
  const { descriptionId } = useDialogContext();
  
  return (
    <p
      id={id || descriptionId}
      className={cn('text-sm text-slate-500', className)}
      {...props}
    />
  );
};
