import { DataList as Root, type DataListProps } from "@/components/DataList/DataList.tsx";
import { DataListItem, type DataListItemProps } from "@/components/DataList/DataListItem.tsx";
import { DataListEmpty } from "@/components/DataList/DataListEmpty.tsx";
import { DataListSkeleton } from "@/components/DataList/DataListSkeleton.tsx";

// 使用明確的類型定義來確保 TypeScript 能正確推斷
const DataListWithSubcomponents = Root as typeof Root & {
    Item: typeof DataListItem;
    Empty: typeof DataListEmpty;
    Skeleton: typeof DataListSkeleton;
};

// 在運行時組合組件
DataListWithSubcomponents.Item = DataListItem;
DataListWithSubcomponents.Empty = DataListEmpty;
DataListWithSubcomponents.Skeleton = DataListSkeleton;

export const DataList = DataListWithSubcomponents;

export { DataListItem, DataListEmpty, DataListSkeleton };

export type { DataListProps, DataListItemProps };
