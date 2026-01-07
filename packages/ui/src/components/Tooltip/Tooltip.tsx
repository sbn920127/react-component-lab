import React, { useRef, useState } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  type Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { TooltipContext } from '@/components/Tooltip/TooltipContext.tsx';

interface TooltipProps {
  children?: React.ReactNode;
  defaultOpen?: boolean; // 非受控模式下的預設狀態
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
  delay?: number;
}

export const Tooltip = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement = 'top',
  delay = 200,
}: TooltipProps) => {
  // 非受控模式的 state
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = (newOpen: boolean) => {
    setControlledOpen?.(newOpen);
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
  };

  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offset(8), // 偏移量設為 8px
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  // 使用 hover 互動，並設定開啟延遲
  const hover = useHover(context, {
    move: false,
    delay: { open: delay, close: 0 }, // 開啟有延遲，關閉立刻
  });

  // 使用 focus 互動，讓鍵盤使用者也能觸發 Tooltip
  const focus = useFocus(context);

  // 按 ESC 關閉
  const dismiss = useDismiss(context);

  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <TooltipContext.Provider
      value={{
        open,
        setOpen,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        arrowRef,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

export default Tooltip;
