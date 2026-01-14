import { DropdownMenu as Root } from '@/components/DropdownMenu/DropdownMenu.tsx';
import { DropDownMenuContent } from '@/components/DropdownMenu/DropdownMenuContent.tsx';
import { DropdownMenuTrigger } from '@/components/DropdownMenu/DropdownMenuTrigger.tsx';
import { DropdownMenuItem } from '@/components/DropdownMenu/DropdownMenuItem.tsx';
import { DropdownMenuSeparator } from '@/components/DropdownMenu/DropdownMenuSeparator.tsx';
import { DropdownMenuLabel } from '@/components/DropdownMenu/DropdownMenuLabel.tsx';

const DropdownMenuSubComponents = Root as typeof Root & {
  Trigger: typeof DropdownMenuTrigger;
  Content: typeof DropDownMenuContent;
  Item: typeof DropdownMenuItem;
  Separator: typeof DropdownMenuSeparator;
  Label: typeof DropdownMenuLabel;
};

DropdownMenuSubComponents.Trigger = DropdownMenuTrigger;
DropdownMenuSubComponents.Content = DropDownMenuContent;
DropdownMenuSubComponents.Item = DropdownMenuItem;
DropdownMenuSubComponents.Separator = DropdownMenuSeparator;
DropdownMenuSubComponents.Label = DropdownMenuLabel;

export const DropdownMenu = DropdownMenuSubComponents;
export {
  DropDownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
};
