import React, { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';

interface ComboboxContextValue {
  // 狀態
  open: boolean;
  setOpen: (open: boolean) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;

  // Floating UI 邏輯
  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  context: ReturnType<typeof useFloating>['context'];
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];

  // list Navigation
  elementsRef: React.RefObject<Array<HTMLElement | null>>;
  labelsRef: React.RefObject<Array<string | null>>;
}

export const ComboboxContext = createContext<ComboboxContextValue | null>(null);

export function useComboboxContext() {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('Combobox components must be used within <Combobox>');
  }
  return context;
}
