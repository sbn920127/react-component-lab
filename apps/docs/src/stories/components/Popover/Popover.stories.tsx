import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button } from '@react-component-lab/ui';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  subcomponents: {
    'Popover.Trigger': Popover.Trigger,
    'Popover.Content': Popover.Content,
    'Popover.Portal': Popover.Portal,
    'Popover.Arrow': Popover.Arrow as any, // 有時 TS 對 generic component 的 subcomponents 支援較弱
  } as any,
  parameters: {
    layout: 'centered',
    description: {
      component: '基於 Floating UI 的氣泡彈出框。自動處理定位、碰撞檢測 (Flip) 與 焦點管理。',
    },
    story: {
      inline: false,
      iframeHeight: 400,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: () => (
    <Popover placement="bottom">
      <Popover.Trigger asChild>
        <Button>點擊我 (Bottom)</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Title>尺寸規格</Popover.Title>
          <Popover.Description>設定寬度為 100%，高度自動調整。</Popover.Description>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const WithArrow: Story = {
  render: () => (
    <Popover placement="top">
      <Popover.Trigger>帶箭頭的 Popover</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="w-48 border-slate-900 bg-slate-900 text-white"
          aria-label="提示訊息"
        >
          <div className="text-center text-sm">這是一個黑色的 Tooltip 風格</div>
          <Popover.Arrow className="fill-slate-900 stroke-slate-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-12 p-8">
      {(['top', 'right', 'left', 'bottom'] as const).map((side) => (
        <Popover key={side} placement={side}>
          <Popover.Trigger asChild>
            <Button variant="outline" className="w-24">
              {side}
            </Button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content aria-label={`位置：${side}`}>
              <p className="text-sm">我在你的 {side} 邊！</p>
              <Popover.Arrow className="fill-white stroke-slate-200" />
            </Popover.Content>
          </Popover.Portal>
        </Popover>
      ))}
    </div>
  ),
};

export const SettingsMenu: Story = {
  render: () => (
    <Popover placement="bottom-end" offset={10}>
      <Popover.Trigger asChild>
        <Button>⚙️ 設定</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="w-80">
          <Popover.Title>顯示設定</Popover.Title>
          <Popover.Description>自定義你的工作區外觀。</Popover.Description>
          <div className="mt-4 grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <label className="text-sm font-medium">寬度</label>
                <input className="col-span-2 h-8 rounded border px-2 text-sm" defaultValue="100%" />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <label className="text-sm font-medium">最大高度</label>
                <input
                  className="col-span-2 h-8 rounded border px-2 text-sm"
                  defaultValue="300px"
                />
              </div>
            </div>

            <div className="flex justify-end border-t pt-3">
              <Button size="sm" variant="primary">
                儲存變更
              </Button>
            </div>
          </div>
          <Popover.Arrow className="fill-white stroke-slate-200" />
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  ),
};
