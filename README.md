# React Component Lab

這是一個基於 **React 19**、**TypeScript** 與 **Vite**，並採用 **Monorepo** 架構打造的高品質 Headless UI 組件庫。

本專案旨在展示進階前端架構與設計模式，包括 **Polymorphic Components (多型組件)**、**Compound Components (複合組件)** 以及 **Inversion of Control (IoC / 控制反轉)** 的實踐。

## 架構設計 (Architecture)

本專案採用 `pnpm workspaces` 進行 Monorepo 管理，實現關注點分離：

- **`packages/ui`**: 核心組件庫。
    - 特點：Headless 設計（無樣式綁定）、高可存取性 (a11y)、嚴格的 TypeScript 型別安全。
    - 建置工具：Vite Library Mode。
- **`apps/docs`**: 文檔與展示區。
    - 特點：使用 **Storybook 8** 建立互動式文檔與開發環境。

##  快速開始 (Getting Started)

### 前置需求 (Prerequisites)

- Node.js 18+
- pnpm 8+

### 安裝依賴 (Installation)

在專案根目錄執行以下指令，安裝所有 Workspaces 的依賴：

```bash
pnpm install
