import { Popover as Root } from '@/components/Popover/Popover.tsx';
import { PopoverTrigger } from '@/components/Popover/PopoverTrigger';
import { PopoverContent } from '@/components/Popover/PopoverContent';
import { PopoverPortal } from '@/components/Popover/PopoverPortal';
import { PopoverArrow } from '@/components/Popover/PopoverArrow';

const PopoverWithSubcomponents = Root as typeof Root & {
  Trigger: typeof PopoverTrigger;
  Portal: typeof PopoverPortal;
  Content: typeof PopoverContent;
  Arrow: typeof PopoverArrow;
};

PopoverWithSubcomponents.Trigger = PopoverTrigger;
PopoverWithSubcomponents.Portal = PopoverPortal;
PopoverWithSubcomponents.Content = PopoverContent;
PopoverWithSubcomponents.Arrow = PopoverArrow;

export const Popover = PopoverWithSubcomponents;
export { PopoverTrigger, PopoverContent, PopoverPortal, PopoverArrow };
export type { PopoverProps } from './Popover';
