import type { Meta, StoryObj } from "@storybook/react";
import { DataList, DataListItem, DataListEmpty, DataListSkeleton, type DataListProps } from '@react-component-lab/ui';
import { useState } from "react";

// 1. 準備 Mock Data
const MOCK_DATA = [
    { id: 1, name: "陳怡君", role: "資深前端工程師", dept: "產品研發部", location: "台北市信義區" },
    { id: 2, name: "林志豪", role: "後端架構師", dept: "系統運維部", location: "新北市板橋區" },
    { id: 3, name: "張雅婷", role: "UI/UX 設計師", dept: "設計中心", location: "台中市西屯區" }, // 你的所在地
    { id: 4, name: "王建宏", role: "專案經理", dept: "產品研發部", location: "高雄市前鎮區" },
    { id: 5, name: "李淑芬", role: "資料分析師", dept: "數據中心", location: "台南市東區" },
];

// 2. 定義 Meta
const meta: Meta<typeof DataList> = {
    title: "UI/DataList",
    component: DataList,
    subcomponents: {
        "DataList.Item": DataListItem,
        "DataList.Empty": DataListEmpty,
        "DataList.Skeleton": DataListSkeleton
    },
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "基於 Compound Component 模式的列表容器。負責佈局 (Grid/List) 切換與狀態展示，不涉入業務邏輯。",
            },
        },
    },
    argTypes: {
        layout: {
            control: "radio",
            options: ["list", "grid"],
            description: "控制列表的排列方式",
            table: {
                defaultValue: { summary: "list" },
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof DataList>;

// 3. 定義渲染模板 (Template)
const renderDataList = (args: DataListProps) => {
    return (
        <DataList {...args}>
            {MOCK_DATA.map((user) => (
                <DataList.Item key={user.id}>
                    {/* 這裡模擬業務層級的卡片設計 */}
                    <div
                        className={`
              flex items-center gap-4 border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md
              ${args.layout === 'grid' ? 'flex-col items-start rounded-xl h-full' : 'rounded-lg justify-between'}
            `}
                    >
                        {/* 左側資訊 */}
                        <div className={`flex items-center gap-3 ${args.layout === 'grid' ? 'w-full' : ''}`}>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                                {user.name[0]}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{user.name}</h3>
                                <p className="text-sm text-slate-500">{user.role}</p>
                            </div>
                        </div>

                        {/* 右側標籤 (Grid 模式下稍微不同) */}
                        <div className={`flex items-center gap-2 ${args.layout === 'grid' ? 'mt-4 w-full justify-between border-t pt-4' : ''}`}>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {user.dept}
              </span>
                            <span className="text-xs text-slate-400">
                {user.location}
              </span>
                        </div>
                    </div>
                </DataList.Item>
            ))}
        </DataList>
    );
};

// 4. Stories

export const ListMode: Story = {
    args: {
        layout: "list",
    },
    render: renderDataList,
};

export const GridMode: Story = {
    args: {
        layout: "grid",
    },
    render: renderDataList,
};

export const LoadingState: Story = {
    render: (args: DataListProps) => (
        <DataList {...args}>
            <DataList.Skeleton count={4} />
        </DataList>
    ),
    args: {
        layout: "grid", // 展示 Grid 下的 Skeleton 長相
    },
};

export const EmptyState: Story = {
    render: (args: DataListProps) => (
        <DataList {...args}>
            <DataList.Empty>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl">🔍</span>
                    <h3 className="text-lg font-semibold text-slate-900">找不到相關資料</h3>
                    <p className="text-sm text-slate-500">請嘗試調整您的搜尋關鍵字或是篩選條件。</p>
                    <button className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                        清除篩選
                    </button>
                </div>
            </DataList.Empty>
        </DataList>
    ),
    args: {
        layout: "list",
    },
};

// 互動式範例：模擬真實 App 切換
const InteractiveExampleComponent = () => {
    const [layout, setLayout] = useState<"list" | "grid">("grid");
    const [isLoading, setIsLoading] = useState(false);

    // 模擬重新載入
    const handleReload = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="space-y-4">
            {/* 模擬 Toolbar */}
            <div className="flex items-center justify-between rounded-lg border bg-slate-50 p-2">
                <h2 className="font-bold text-slate-700 px-2">團隊成員</h2>
                <div className="flex gap-2">
                    <button onClick={handleReload} className="text-sm text-blue-600 hover:underline px-2">
                        {isLoading ? "載入中..." : "重新整理"}
                    </button>
                    <div className="h-4 w-px bg-slate-300 self-center" />
                    <button
                        onClick={() => setLayout("list")}
                        className={`px-3 py-1 text-sm rounded ${layout === 'list' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
                    >
                        列表
                    </button>
                    <button
                        onClick={() => setLayout("grid")}
                        className={`px-3 py-1 text-sm rounded ${layout === 'grid' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
                    >
                        網格
                    </button>
                </div>
            </div>

            {/* 組件本體 */}
            <DataList layout={layout}>
                {isLoading ? (
                    <DataList.Skeleton count={6} />
                ) : (
                    MOCK_DATA.map((user) => (
                        <DataList.Item key={user.id}>
                            {/* 簡單的卡片 */}
                            <div className="bg-white border rounded-lg p-4 shadow-sm h-full">
                                <div className="font-bold">{user.name}</div>
                                <div className="text-sm text-slate-500">{user.role}</div>
                            </div>
                        </DataList.Item>
                    ))
                )}
            </DataList>
        </div>
    );
};

export const InteractiveExample: Story = {
    render: () => <InteractiveExampleComponent />,
};
