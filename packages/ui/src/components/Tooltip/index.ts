import { Tooltip as Root } from '@/components/Tooltip/Tooltip.tsx';
import { TooltipTrigger } from '@/components/Tooltip/TooltipTrigger';
import { TooltipContent } from '@/components/Tooltip/TooltipContent.tsx';
import { TooltipArrow } from '@/components/Tooltip/TooltipArrow.tsx';

const TooltipWithSubcomponents = Root as typeof Root & {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
  Arrow: typeof TooltipArrow;
};

TooltipWithSubcomponents.Trigger = TooltipTrigger;
TooltipWithSubcomponents.Content = TooltipContent;
TooltipWithSubcomponents.Arrow = TooltipArrow;

export const Tooltip = TooltipWithSubcomponents;
export { TooltipTrigger, TooltipContent, TooltipArrow };
export type { TooltipProps } from './Tooltip';
