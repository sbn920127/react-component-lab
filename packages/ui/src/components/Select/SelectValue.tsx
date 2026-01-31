import React from 'react';
import { useSelectContext } from '@/components/Select/SelectContext.tsx';

interface SelectValueProps {
  placeholder?: string;
  children?: React.ReactNode;
}

export const SelectValue = ({ placeholder, children }: SelectValueProps) => {
  const { selectedLabel } = useSelectContext();

  // 優先順序：
  // 1. children (如果有傳)
  // 2. selectedLabel (選中的 Item 的文字)
  // 3. placeholder (都沒選時)
  return (
    <span className="pointer-events-noen block truncate">
      {children || selectedLabel || placeholder}
    </span>
  );
};
