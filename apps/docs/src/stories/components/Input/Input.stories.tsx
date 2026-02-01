import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@react-component-lab/ui';
import { Search, Mail, Eye } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '請輸入內容...',
  },
};

export const WidthIcon: Story = {
  render: () => (
    <div className="w-[300px]">
      <Input placeholder="搜尋..." startIcon={<Search className="h-4 w-4" />} />
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <div className="w-[300px]">
      <Input
        type="email"
        placeholder="Email"
        startIcon={<Mail className="h-4 w-4" />}
        // 這裡可以做成可點擊的按鈕
        endIcon={
          <button type="button">
            <Eye className="h-4 w-4 cursor-pointer hover:text-slate-900" />
          </button>
        }
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: '無法編輯',
    startIcon: <Mail className="h-4 w-4" />,
  },
};
