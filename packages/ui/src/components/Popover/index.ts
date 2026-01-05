import { Popover as Root } from '@/components/Popover/Popover.tsx';
import { PopoverTrigger } from '@/components/Popover/PopoverTrigger';
import { PopoverContent } from '@/components/Popover/PopoverContent';
import { PopoverPortal } from '@/components/Popover/PopoverPortal';

const PopoverWithSubcomponents = Root as typeof Root & {
  Trigger: typeof PopoverTrigger;
  Portal: typeof PopoverPortal;
  Content: typeof PopoverContent;
};

PopoverWithSubcomponents.Trigger = PopoverTrigger;
PopoverWithSubcomponents.Portal = PopoverPortal;
PopoverWithSubcomponents.Content = PopoverContent;

export const Popover = PopoverWithSubcomponents;
export { PopoverTrigger, PopoverContent, PopoverPortal };
