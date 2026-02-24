import React, { useState, useRef, useCallback } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
  useRole,
  useDismiss,
  useListNavigation,
  useInteractions,
  FloatingList,
  type Placement,
} from '@floating-ui/react';
import { ComboboxContext } from '@/components/Combobox/ComboboxContext.tsx';

interface ComboboxProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: Placement;
}

export function Combobox({
  children,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement = 'bottom-start',
}: ComboboxProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = useCallback(
    (newOpen: boolean) => {
      setControlledOpen?.(newOpen);
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen);
      }
    },
    [controlledOpen, setControlledOpen]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(4),
      flip(),
      shift(),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
      }),
    ],
  });

  // Interactions 組合
  const role = useRole(context, { role: 'combobox' });
  const dismiss = useDismiss(context);
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    onNavigate: setActiveIndex,
    // 【極度關鍵】：保持焦點在 Input 上，但允許方向鍵操作 List
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    role,
    dismiss,
    listNavigation,
  ]);

  return (
    <ComboboxContext.Provider
      value={{
        open,
        setOpen,
        activeIndex,
        setActiveIndex,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        elementsRef,
        labelsRef,
      }}
    >
      <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
        {children}
      </FloatingList>
    </ComboboxContext.Provider>
  );
}
