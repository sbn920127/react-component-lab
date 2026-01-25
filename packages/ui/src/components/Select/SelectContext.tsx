import React, { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';

interface SelectContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  value: string;
  selectedLabel: React.ReactNode;
  handleSelect: (value: string, label: React.ReactNode) => void;

  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  context: ReturnType<typeof useFloating>['context'];
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];

  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  elementsRef: React.RefObject<Array<HTMLElement | null>>;
  labelsRef: React.RefObject<Array<string | null>>;
}

export const SelectContext = createContext<SelectContextValue | null>(null);

export function useSelectContext() {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within a <Select> component.');
  }
  return context;
}
