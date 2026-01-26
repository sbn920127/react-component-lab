import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@react-component-lab/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 更新 Default story (因為我們把 label prop 改成 children 了)
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
    onClick: () => console.log('Button clicked'),
  },
};

// 新增一個 Polymorphic 的範例 (這是面試亮點)
export const AsLink: Story = {
  args: {
    as: 'a',
    href: 'https://google.com',
    target: '_blank',
    children: 'Go to Google (I am an <a> tag)',
  },
};

export const CustomStyle: Story = {
  args: {
    children: 'Custom Purple',
    variant: 'primary',
    className: 'bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost (Unstyled-ish)',
    variant: 'ghost',
  },
};

export const HardReset: Story = {
  args: {
    children: 'Hard Reset',
    variant: 'primary',
    // 暴力覆蓋：把所有顏色跟邊框都拿掉
    className: 'bg-transparent text-black hover:bg-transparent border-none ring-0',
  },
};
