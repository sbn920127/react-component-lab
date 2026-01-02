import { createPortal } from "react-dom";
import { useDialogContext } from "./DialogContext";

export const DialogPortal = ({ children }: { children: React.ReactNode }) => {
    const { open } = useDialogContext();

    if (!open) return null;

    // 備註：這裡直接傳送到 document.body
    // 如果是 SSR (Next.js)，document 可能還沒準備好，正規做法可能需要檢查 window 是否存在
    if (typeof document === 'undefined') return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
            {children}
        </div>,
        document.body
    );

}
