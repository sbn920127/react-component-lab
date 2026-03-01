import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { Input, InputProps } from '@/components/Input';
import { useComboboxContext } from '@/components/Combobox/ComboboxContext.tsx';

export const ComboboxInput = React.forwardRef<HTMLInputElement, InputProps>((props, propRef) => {
  const { refs, getReferenceProps } = useComboboxContext();
  const ref = useMergeRefs([refs.setReference, propRef]);

  return <Input ref={ref} {...getReferenceProps(props)} />;
});

ComboboxInput.displayName = 'ComboboxInput';
