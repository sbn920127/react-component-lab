import { createContext, useContext } from 'react';

interface DialogContextValue {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

export const useDialogContext = () => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('useDialogContext must be used within a Dialog component');
    }
    return context;
};

export { DialogContext };


