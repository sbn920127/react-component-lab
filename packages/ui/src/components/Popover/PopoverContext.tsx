import React, { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  // 這些是 Floating UI 提供的核心物件
  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  context: ReturnType<typeof useFloating>['context'];
  // 這些是互動事件的 props getter (重點！)
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  placement: string;
  modal: boolean;
  arrowRef: React.RefObject<SVGSVGElement | null>;
}

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error('Popover compound components must be used within <Popover>');
  }
  return context;
};
