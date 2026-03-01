import { Combobox as Root } from '@/components/Combobox/Combobox.tsx';
import { ComboboxContent } from '@/components/Combobox/ComboboxContent.tsx';
import { ComboboxEmpty } from '@/components/Combobox/ComboboxEmpty.tsx';
import { ComboboxInput } from '@/components/Combobox/ComboboxInput.tsx';
import { ComboboxItem } from '@/components/Combobox/ComboboxItem.tsx';

const ComboboxWithSubcomponents = Root as typeof Root & {
  Content: typeof ComboboxContent;
  Empty: typeof ComboboxEmpty;
  Input: typeof ComboboxInput;
  Item: typeof ComboboxItem;
};

ComboboxWithSubcomponents.Content = ComboboxContent;
ComboboxWithSubcomponents.Empty = ComboboxEmpty;
ComboboxWithSubcomponents.Input = ComboboxInput;
ComboboxWithSubcomponents.Item = ComboboxItem;

export const Combobox = ComboboxWithSubcomponents;

export {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
};
export { ComboboxContext, useComboboxContext } from '@/components/Combobox/ComboboxContext.tsx';
