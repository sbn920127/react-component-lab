import { Popover as Root } from '@/components/Popover/Popover.tsx';
import { PopoverTrigger } from '@/components/Popover/PopoverTrigger';
import { PopoverContent } from '@/components/Popover/PopoverContent';
import { PopoverPortal } from '@/components/Popover/PopoverPortal';
import { PopoverArrow } from '@/components/Popover/PopoverArrow';
import { PopoverTitle } from '@/components/Popover/PopoverTitle';
import { PopoverDescription } from '@/components/Popover/PopoverDescription';

const PopoverWithSubcomponents = Root as typeof Root & {
  Trigger: typeof PopoverTrigger;
  Portal: typeof PopoverPortal;
  Content: typeof PopoverContent;
  Arrow: typeof PopoverArrow;
  Title: typeof PopoverTitle;
  Description: typeof PopoverDescription;
};

PopoverWithSubcomponents.Trigger = PopoverTrigger;
PopoverWithSubcomponents.Portal = PopoverPortal;
PopoverWithSubcomponents.Content = PopoverContent;
PopoverWithSubcomponents.Arrow = PopoverArrow;
PopoverWithSubcomponents.Title = PopoverTitle;
PopoverWithSubcomponents.Description = PopoverDescription;

export const Popover = PopoverWithSubcomponents;
export {
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  PopoverArrow,
  PopoverTitle,
  PopoverDescription,
};
export type { PopoverProps } from '@/components/Popover/Popover.tsx';
