import React from 'react';
import { useDialogContext } from "@/components/Dialog/DialogContext.tsx";
import { cn } from "@/utils/cn";

export const DialogOverlay = ({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const { onOpenChange } = useDialogContext();

    return (
        <div onClick={() => onOpenChange(false)} className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)} {...props} />
    );
};
