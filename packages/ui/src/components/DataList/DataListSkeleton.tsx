import { useDataListContext } from "@/components/DataList/DataListContext.tsx";
import { cn } from "@/utils/cn.ts";

interface DataListSkeletonProps {
    count?: number;
    className?: string;
}

export const DataListSkeleton = ({count = 3, className}: DataListSkeletonProps) => {
    const { layout } = useDataListContext();
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <li
                    key={i}
                    className={cn(
                        "animate-pulse rounded-md bg-slate-200", // 共用樣式
                        layout === "list" ? "h-16 w-full" : "aspect-[4/3] w-full", // 根據 layout 改變形狀
                        className
                    )}
                />
            ))}
        </>
    )
}
