import React, { useState, useRef, useCallback } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useTypeahead,
  useInteractions,
  FloatingList,
  type Placement,
} from '@floating-ui/react';
import { SelectContext } from '@/components/Select/SelectContext';

interface SelectProps {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Select({
  children,
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: SelectProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = controlledOpen ?? uncontrolledOpen;
  const setIsOpen = useCallback(
    (newOpen: boolean) => {
      setControlledOpen?.(newOpen);
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen);
      }
    },
    [controlledOpen, setControlledOpen]
  );

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const value = controlledValue ?? uncontrolledValue;
  const [selectedLabel, setSelectedLabel] = useState<React.ReactNode>(null);

  const handleSelect = useCallback(
    (newValue: string, newLabel: React.ReactNode) => {
      onValueChange?.(newValue);
      if (controlledValue === undefined) {
        setUncontrolledValue(newValue);
      }
      setSelectedLabel(newLabel);
      setIsOpen(false);
    },
    [onValueChange, controlledValue, setIsOpen]
  );

  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  const labelsRef = useRef<Array<string | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [offset(4), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, { event: 'mousedown' }); // Select 通常在 mousedown 觸發
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' }); // 關鍵：這是 listbox
  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex: null, // 這裡可以進階設定 selectedIndex 讓打開時自動滾動到選中項，先簡化
    onNavigate: setActiveIndex,
    loop: true,
  });
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
    <SelectContext.Provider
      value={{
        isOpen,
        setIsOpen,
        value,
        selectedLabel,
        handleSelect,
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
      <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
        {children}
      </FloatingList>
    </SelectContext.Provider>
  );
}
