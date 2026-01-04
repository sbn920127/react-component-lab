import React, { useState } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  type Placement,
} from '@floating-ui/react';
import { PopoverContext } from './PopoverContext';

interface PopoverProps {
  children: React.ReactNode;
  defaultOpen?: boolean; // 非受控模式下的預設狀態
  open?: boolean; // 受控模式
  onOpenChange?: (open: boolean) => void;
  placement?: Placement; // 例如 "bottom", "top-start"
  modal?: boolean; // 是否為模態 (背景不可點)
}

export const Popover = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement = 'bottom',
  modal = false,
}: PopoverProps) => {
  // 非受控模式的 state
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = (newOpen: boolean) => {
    setControlledOpen?.(newOpen);
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
  };

  // Floating UI 的核心設定
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(5), // 距離觸發按鈕 5px
      flip({ padding: 5 }), // 空間不夠時自動翻轉
      shift({ padding: 5 }), // 確保不會超出螢幕邊緣
    ],
    whileElementsMounted: autoUpdate, // 當捲動頁面時，自動重新計算位置 (關鍵！)
  });

  // 互動行為
  const click = useClick(context);
  // 點擊外部關閉、按 ESC 關閉
  const dismiss = useDismiss(context);
  // 設定角色為 dialog (無障礙考量)
  const role = useRole(context);

  // 組合互動行為
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  return (
    <PopoverContext.Provider
      value={{
        open,
        setOpen,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        modal,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};
