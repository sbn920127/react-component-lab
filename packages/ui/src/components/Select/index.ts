import { Select as Root } from '@/components/Select/Select.tsx';
import { SelectContent } from '@/components/Select/SelectContent.tsx';
import { SelectValue } from '@/components/Select/SelectValue.tsx';
import { SelectItem } from '@/components/Select/SelectItem.tsx';
import { SelectTrigger } from '@/components/Select/SelectTrigger.tsx';

const SelectWithSubcomponents = Root as typeof Root & {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Value: typeof SelectValue;
};

SelectWithSubcomponents.Trigger = SelectTrigger;
SelectWithSubcomponents.Content = SelectContent;
SelectWithSubcomponents.Item = SelectItem;
SelectWithSubcomponents.Value = SelectValue;

export const Select = SelectWithSubcomponents;
export { SelectContent, SelectValue, SelectItem, SelectTrigger };
