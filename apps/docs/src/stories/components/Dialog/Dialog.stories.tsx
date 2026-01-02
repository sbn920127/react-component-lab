import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, Button } from '@react-component-lab/ui';
import { useState } from 'react';

// todo: 還沒做 Input 組件，所以這裡還是要暫時 Mock 一下
const Input = ({ className, ...props }: any) => (
  <input
    className={`flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Label = ({ children, htmlFor }: any) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    {children}
  </label>
);

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: {
    'Dialog.Trigger': Dialog.Trigger,
    'Dialog.Portal': Dialog.Portal,
    'Dialog.Overlay': Dialog.Overlay,
    'Dialog.Content': Dialog.Content,
    'Dialog.Title': Dialog.Title,
    'Dialog.Description': Dialog.Description,
  } as any,
  parameters: {
    layout: 'centered', // 讓 Dialog 按鈕置中顯示
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// --- Story 1: 基礎用法 (Basic) ---
export const Basic: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <Button>開啟視窗</Button>
      </Dialog.Trigger>

      {/* 記得！Portal 要包住 Overlay 和 Content */}
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>基礎範例</Dialog.Title>
          <Dialog.Description>
            這是一個最基本的 Dialog。你可以點擊背景或是右上角的 X 關閉它。
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Button>知道了</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  ),
};

// --- Story 2: 編輯個人資料 (Form Scenario) ---
export const EditProfile: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <Button>編輯個人資料</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="sm:max-w-[425px]">
          <div>
            <Dialog.Title>編輯個人資料</Dialog.Title>
            <Dialog.Description>請修改您的個人資訊，完成後點擊儲存。</Dialog.Description>
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                姓名
              </Label>
              <Input id="name" defaultValue="王小明" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                帳號
              </Label>
              <Input id="username" defaultValue="@xiaoming" className="col-span-3" />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            {/* 這裡示範 Dialog.Close (如果你有做) 或者單純放著讓使用者按 X */}
            <Button type="submit">儲存變更</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  ),
};

// --- Story 3: 滾動鎖定測試 (Scroll Lock) ---
export const ScrollLockTest: Story = {
  render: () => (
    <div className="flex h-[150vh] w-full flex-col items-center bg-slate-50 pt-20">
      <p className="mb-4 font-bold text-slate-500">⬇️ 請嘗試往下滑動頁面，然後點擊按鈕</p>

      <Dialog>
        <Dialog.Trigger>
          <Button>開啟 Scroll Lock 測試</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>滾動已被鎖定</Dialog.Title>
            <Dialog.Description>
              當這個視窗開啟時，你應該「無法」滾動背後的頁面。
              <br />
              (body style overflow: hidden)
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>

      <div className="mt-10 space-y-10 text-center text-slate-300">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="border border-dashed border-slate-200 p-4">
            長頁面內容佔位符 {i + 1}
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen', // 滿版才能測滾動
  },
};

// --- Story 4: 受控模式 (Controlled) ---
export const ControlledExample = () => {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // 模擬 API 請求
    alert('資料儲存中...');
    setTimeout(() => {
      setOpen(false); // 1秒後自動關閉
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm text-slate-500">當前狀態: {open ? '開啟' : '關閉'}</div>

      {/* 注意：這裡綁定了 open 和 onOpenChange */}
      <Dialog open={open} onOpenChange={setOpen}>
        <Button onClick={() => setOpen(true)}>開啟受控 Dialog</Button>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>受控模式</Dialog.Title>
            <Dialog.Description>
              點擊「儲存」後，會模擬 API 請求，1 秒後自動關閉視窗。
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-2">
              <Button intent="ghost" onClick={() => setOpen(false)}>
                取消
              </Button>
              <Button onClick={handleSave}>儲存 (1s)</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </div>
  );
};
