
import React from "react";
import { cn } from "@/utils/cn.ts";

interface DataListEmptyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const DataListEmpty = ({className, children, ...props }: DataListEmptyProps) => {
    return (
        <div className={cn("flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500", className)} {...props}>
            {children}
        </div>
    )
}
