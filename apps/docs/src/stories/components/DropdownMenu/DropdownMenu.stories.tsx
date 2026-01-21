import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu, Button } from '@react-component-lab/ui';
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  LogOut,
  Mail,
  Plus,
  LifeBuoy,
  Cloud,
} from 'lucide-react';

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  subcomponents: {
    'DropdownMenu.Trigger': DropdownMenu.Trigger,
    'DropdownMenu.Content': DropdownMenu.Content,
    'DropdownMenu.Item': DropdownMenu.Item,
    'DropdownMenu.Separator': DropdownMenu.Separator,
    'DropdownMenu.Label': DropdownMenu.Label,
  } as any,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

// --- Story 1: 基礎用法 ---
export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>開啟選單</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Label>我的帳戶</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={() => alert('點擊了個人資料')}>個人資料</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => alert('點擊了付款方式')}>付款方式</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => alert('點擊了設定')}>設定</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => alert('點擊了鍵盤快捷鍵')}>鍵盤快捷鍵</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

// --- Story 2: 複雜選單 (模擬 Github 風格) ---
export const ComplexMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>我的帳號</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Label>我的帳號</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <User className="mr-2 h-4 w-4" />
          <span>個人資料</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>付款資料</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Settings className="mr-2 h-4 w-4" />
          <span>設定</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <LifeBuoy className="mr-2 inline-block" />
          聯絡支援
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Keyboard className="mr-2 h-4 w-4" />
          <span>鍵盤快捷鍵</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⌘K</span>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>
          <User className="mr-2 h-4 w-4" />
          <span>Team</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Plus className="mr-2 h-4 w-4" />
          <span>New Team</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⌘+T</span>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item>
          <Mail className="mr-2 h-4 w-4" />
          <span>Mail</span>
        </DropdownMenu.Item>

        <DropdownMenu.Item>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenu.Item>

        <DropdownMenu.Item disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API (Disabled)</span>
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        {/* 使用紅色文字表示危險操作 */}
        <DropdownMenu.Item className="text-red-600 focus:bg-red-50 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <span className="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

// --- Story 3: 停用項目 (Disabled Item) ---
// 測試重點：鍵盤導航應該要跳過 "Invite users"
export const WithDisabledItem: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>Actions</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item>New Tab</DropdownMenu.Item>
        <DropdownMenu.Item>New Window</DropdownMenu.Item>
        {/* 這個項目應該無法被選取，也無法點擊 */}
        <DropdownMenu.Item disabled>New Private Window</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Share</DropdownMenu.Item>
        <DropdownMenu.Item>Print</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
