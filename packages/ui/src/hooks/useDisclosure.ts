import { useState, useCallback } from 'react';

interface UseDisclosureProps {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDisclosure = (props: UseDisclosureProps = {}) => {
  const { defaultIsOpen = false, onOpen: onOpenProp, onClose: onCloseProp } = props;

  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    onOpenProp?.();
  }, [onOpenProp]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    onCloseProp?.();
  }, [onCloseProp]);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        onOpenProp?.();
      } else {
        onCloseProp?.();
      }
      return next;
    });
  }, [onOpenProp, onCloseProp]);

  // 提供 helper function 讓你直接設定狀態 (例如從 API 回傳結果強制關閉)
  const setOpen = useCallback(
    (value: boolean) => {
      setIsOpen(value);
      if (value) {
        onOpenProp?.();
      } else {
        onCloseProp?.();
      }
    },
    [onOpenProp, onCloseProp]
  );

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setOpen, // 進階用途
  };
};
