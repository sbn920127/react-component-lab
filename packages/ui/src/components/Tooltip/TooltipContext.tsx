import React, { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';

interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  // 這些是 Floating UI 提供的核心物件
  refs: ReturnType<typeof useFloating>['refs'];
  floatingStyles: ReturnType<typeof useFloating>['floatingStyles'];
  context: ReturnType<typeof useFloating>['context'];
  // 這些是互動事件的 props getter (重點！)
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  arrowRef: React.RefObject<SVGSVGElement | null>;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltipContext must be used within a <Tooltip> component.');
  }
  return context;
};
