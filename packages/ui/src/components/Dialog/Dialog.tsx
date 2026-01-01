import React, { useState, useEffect } from "react";
import { DialogContext } from "@/components/Dialog/DialogContext.tsx";

export interface DialogProps {
    children: React.ReactNode;
    /** 非受控模式下的預設狀態 */
    defaultOpen?: boolean;
    /** * 受控模式 (Controlled): 由外部決定開關
     * 如果傳了這個 prop，內部的 state 就會失效，完全聽命於外部
     */
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({ children, defaultOpen = false, open: controlledOpen, onOpenChange: controlledOnOpenChange }: DialogProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;

    const onOpenChange = (newOpen: boolean) => {
        if (!isControlled) {
            setUncontrolledOpen(newOpen);
        }
        controlledOnOpenChange?.(newOpen);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <DialogContext.Provider value={{ open, onOpenChange }}>
            {children}
        </DialogContext.Provider>
    );

}
