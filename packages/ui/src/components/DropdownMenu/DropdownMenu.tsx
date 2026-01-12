import React, { useState, useRef } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useListNavigation, // 列表導航
  useTypeahead, // 打字搜尋
  useInteractions,
  type Placement,
} from '@floating-ui/react';
import { DropdownMenuContext } from '@/components/DropdownMenu/DropdownMenuContext.tsx';

interface DropdownMenuProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
}

export const DropdownMenu = ({
  children,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement = 'bottom-start', // 選單通常靠左對齊
}: DropdownMenuProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = (value: boolean) => {
    setControlledOpen?.(value);
    if (controlledOpen === undefined) {
      setUncontrolledOpen(value);
    }
  };

  // List Navigation 狀態
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'menu' });

  // 列表導航 (上下鍵)
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  // 打字搜尋
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    onMatch: setActiveIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
    typeahead,
  ]);

  return (
    <DropdownMenuContext.Provider
      value={{
        open,
        setOpen,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        activeIndex,
        setActiveIndex,
        elementsRef,
        labelsRef,
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
};
