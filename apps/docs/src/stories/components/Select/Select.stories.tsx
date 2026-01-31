import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@react-component-lab/ui';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  subcomponents: {
    'Select.Trigger': Select.Trigger,
    'Select.Content': Select.Content,
    'Select.Item': Select.Item,
    'Select.Value': Select.Value,
  } as any,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '以點擊/觸控選擇選項。不支援輸入文字搜尋（Typeahead），請以點選方式操作。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// --- Story 1: 基礎用法 (Basic) ---
export const Basic: Story = {
  render: () => {
    return (
      <Select>
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="選擇一種水果" />
        </Select.Trigger>

        <Select.Content>
          <Select.Item value="apple">蘋果 (Apple)</Select.Item>
          <Select.Item value="banana">香蕉 (Banana)</Select.Item>
          <Select.Item value="orange">橘子 (Orange)</Select.Item>
          <Select.Item value="grape">葡萄 (Grape)</Select.Item>
          <Select.Item value="watermelon">西瓜 (Watermelon)</Select.Item>
        </Select.Content>
      </Select>
    );
  },
};

// --- Story 2: 受控模式 (Controlled) ---
export const Controlled = () => {
  const [value, setValue] = useState('banana');

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm text-slate-500">
        當前選中值: <span className="font-bold text-slate-900">{value}</span>
      </div>

      <Select value={value} onValueChange={setValue}>
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="選擇一種水果" />
        </Select.Trigger>

        <Select.Content>
          <Select.Item value="apple">蘋果</Select.Item>
          <Select.Item value="banana">香蕉</Select.Item>
          <Select.Item value="orange">橘子</Select.Item>
        </Select.Content>
      </Select>
    </div>
  );
};

// --- Story 3: 包含停用選項 (With Disabled Items) ---
export const WithDisabledItems: Story = {
  render: () => {
    return (
      <Select>
        <Select.Trigger className="w-[240px]">
          <Select.Value placeholder="選擇你的方案" />
        </Select.Trigger>

        <Select.Content>
          <Select.Item value="free">免費版 (Free)</Select.Item>
          <Select.Item value="pro">專業版 (Pro)</Select.Item>
          <Select.Item value="enterprise" disabled>
            企業版 (Enterprise) - 請洽業務
          </Select.Item>
        </Select.Content>
      </Select>
    );
  },
};

// --- Story 4: 長列表捲動 (Scrollable) ---
export const Scrollable: Story = {
  render: () => {
    return (
      <Select>
        <Select.Trigger className="w-[280px]">
          <Select.Value placeholder="選擇時區..." />
        </Select.Trigger>

        <Select.Content className="max-h-[200px]">
          {Array.from({ length: 50 }).map((_, i) => (
            <Select.Item key={i} value={`zone-${i}`}>
              (GMT+{i}) 時區選擇範例 - 選項 {i + 1}
            </Select.Item>
          ))}
        </Select.Content>
      </Select>
    );
  },
};
// --- Story 5: 自定義顯示內容 (Custom Display) ---
export const CustomDisplay = () => {
  const [currency, setCurrency] = useState('usd');

  const getDisplayLabel = () => {
    switch (currency) {
      case 'usd':
        return '🇺🇸 美金 (USD)';
      case 'eur':
        return '🇪🇺 歐元 (EUR)';
      case 'jpy':
        return '🇯🇵 日幣 (JPY)';
      default:
        return '請選擇幣別';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-2 text-sm text-slate-500">
        情境：選單裡只顯示簡單代號，但選中後要顯示國旗與全名。
      </div>

      <Select value={currency} onValueChange={setCurrency}>
        <Select.Trigger className="w-[200px]">
          {/* 當你傳入 children 時，會完全無視內部的 selectedLabel */}
          <Select.Value>
            {/* 這裡你可以放任何 JSX，包含 Icon、Span 等 */}
            <span className="font-bold text-blue-600">{getDisplayLabel()}</span>
          </Select.Value>
        </Select.Trigger>

        <Select.Content>
          {/* Item 顯示簡單的文字 */}
          <Select.Item value="usd">USD</Select.Item>
          <Select.Item value="eur">EUR</Select.Item>
          <Select.Item value="jpy">JPY</Select.Item>
        </Select.Content>
      </Select>
    </div>
  );
};
