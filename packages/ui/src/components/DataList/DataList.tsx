import React from "react";
import { cva, type VariantProps} from "class-variance-authority";
import { cn } from "@/utils/cn";
import { DataListContext, type DataListLayout } from "./DataListContext";

const dataListVariants = cva("w-full", {
    variants: {
        layout: {
            list: "flex flex-col gap-y-3",
            grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        },
    },
    defaultVariants: {
        layout: "list",
    },
})

export interface DataListProps
    extends React.HTMLAttributes<HTMLUListElement>,
        VariantProps<typeof dataListVariants> {
    children: React.ReactNode;
    layout?: DataListLayout;
}

export const DataList = ({
                              layout = "list",
                              className,
                              children,
                              ...props
                          }: DataListProps) => {
    return (
        <DataListContext.Provider value={{ layout }}>
            <ul
                className={cn(dataListVariants({ layout }), className)}
                {...props}
            >
                {children}
            </ul>
        </DataListContext.Provider>
    )
}

