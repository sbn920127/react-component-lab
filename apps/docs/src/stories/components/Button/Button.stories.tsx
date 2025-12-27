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
        children: 'Click Me', // 改用 children
        onClick: () => console.log('Button clicked'),
    },
};

// 新增一個 Polymorphic 的範例 (這是面試亮點)
export const AsLink: Story = {
    args: {
        as: 'a', // 變身為 <a> 標籤
        href: 'https://google.com', // 因為是 <a>，TS 會自動提示你可以用 href
        target: '_blank',
        children: 'Go to Google (I am an <a> tag)',
    },
};
