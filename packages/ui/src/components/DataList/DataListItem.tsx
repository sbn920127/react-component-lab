import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { useDataListContext } from "@/components/DataList/DataListContext.tsx";
import { cn } from "@/utils/cn.ts";

const itemVariants = cva("group relative transition-all", {
    variants: {
        layout: {
            list: "w-full",
            grid: "h-full",
        },
    },
});

export interface DataListItemProps
    extends React.LiHTMLAttributes<HTMLLIElement>,
        VariantProps<typeof itemVariants> {}

export const DataListItem = ({ className, children, ...props }: DataListItemProps) => {
    const { layout } = useDataListContext();

    return (
        <li className={cn(itemVariants({ layout }), className)} {...props}>
            {children}
        </li>
    );
};


