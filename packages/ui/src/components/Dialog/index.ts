import { Dialog as Root } from '@/components/Dialog/Dialog.tsx';
import { DialogTrigger } from '@/components/Dialog/DialogTrigger.tsx';
import { DialogPortal } from '@/components/Dialog/DialogPortal.tsx';
import { DialogOverlay } from '@/components/Dialog/DialogOverlay.tsx';
import { DialogContent } from '@/components/Dialog/DialogContent.tsx';
import { DialogTitle } from '@/components/Dialog/DialogTitle.tsx';
import { DialogDescription } from '@/components/Dialog/DialogDescription.tsx';

const DialogWithSubcomponents = Root as typeof Root & {
  Trigger: typeof DialogTrigger;
  Portal: typeof DialogPortal;
  Overlay: typeof DialogOverlay;
  Content: typeof DialogContent;
  Title: typeof DialogTitle;
  Description: typeof DialogDescription;
};

DialogWithSubcomponents.Trigger = DialogTrigger;
DialogWithSubcomponents.Portal = DialogPortal;
DialogWithSubcomponents.Overlay = DialogOverlay;
DialogWithSubcomponents.Content = DialogContent;
DialogWithSubcomponents.Title = DialogTitle;
DialogWithSubcomponents.Description = DialogDescription;

export const Dialog = DialogWithSubcomponents;

export {
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
};
