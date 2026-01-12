import { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';

interface DropdownMenuContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;

  // Floating UI 基礎
  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  context: ReturnType<typeof useFloating>['context'];
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];

  // List Navigation 核心
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  elementsRef: React.MutableRefObject<Array<HTMLElement | null>>; // 存所有 Item DOM
  labelsRef: React.MutableRefObject<Array<string | null>>; // 存所有 Item 文字
}

export const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

export const useDropdownMenuContext = () => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('DropdownMenu components must be used within <DropdownMenu>');
  }
  return context;
};
