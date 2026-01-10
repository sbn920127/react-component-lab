import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '@react-component-lab/ui';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  subcomponents: {
    'Tooltip.Trigger': Tooltip.Trigger,
    'Tooltip.Content': Tooltip.Content,
    'Tooltip.Arrow': Tooltip.Arrow as any,
  } as any,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '提示框出現的位置',
    },
    delay: {
      control: 'number',
      description: '顯示前的延遲時間 (ms)',
      table: { defaultValue: { summary: '200' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// --- Story 1: 基礎用法 (Basic) ---
export const Basic: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Tooltip.Trigger asChild>
        {/* Tooltip 的 Trigger 通常是 IconButton，這裡用 Button 示意 */}
        <Button intent="outline">Hover Me</Button>
      </Tooltip.Trigger>

      <Tooltip.Content>
        <p>這是一個 Tooltip</p>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  ),
  args: {
    placement: 'top',
    delay: 200,
  },
};

// --- Story 2: 方位展示 (Placements) ---
export const Placements: Story = {
  render: () => (
    <div className="flex h-40 items-center justify-center gap-4">
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <Tooltip key={placement} placement={placement}>
          <Tooltip.Trigger asChild>
            <Button intent="secondary" className="w-24 capitalize">
              {placement}
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            <p>{placement} side</p>
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
};

// --- Story 3: 無箭頭樣式 (No Arrow) ---
export const NoArrow: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>無箭頭樣式</Button>
      </Tooltip.Trigger>
      <Tooltip.Content sideOffset={5}>
        <p>簡約風格</p>
      </Tooltip.Content>
    </Tooltip>
  ),
};

// --- Story 4: 零延遲 (Instant) ---
// 測試 delay={0} 的效果，滑鼠一上去就顯示
export const InstantShow: Story = {
  render: () => (
    <Tooltip delay={0}>
      <Tooltip.Trigger asChild>
        <Button intent="danger">立即顯示</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>沒有延遲！</p>
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  ),
};
