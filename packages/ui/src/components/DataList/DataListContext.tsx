import { createContext, useContext } from 'react';

export type DataListLayout = 'list' | 'grid';

interface DataListContextValue {
    layout: DataListLayout;
    isLoading?: boolean;
}

const DataListContext = createContext<DataListContextValue | null>(null);

export function useDataListContext() {
    const context = useContext(DataListContext);
    if (!context) {
        throw new Error('useDataListContext must be used within a DataListProvider');
    }
    return context;
}

export { DataListContext };

