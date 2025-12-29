# React Component Lab

這是一個基於 **React 19**、**TypeScript** 與 **Vite**，並採用 **Monorepo** 架構打造的高品質 Headless-based UI 組件庫。

本專案旨在展示進階前端架構與設計模式，包括 **Polymorphic Components (多型組件)**、**CVA 樣式管理** 以及 **Inversion of Control (IoC / 控制反轉)** 的實踐。

## 技術堆疊 (Tech Stack)

- **核心框架:** React 19, TypeScript
- **建置工具:** Vite (Library Mode)
- **套件管理:** pnpm Workspaces (Monorepo)
- **樣式系統:** Tailwind CSS v3, CVA (Class Variance Authority), tailwind-merge
- **文檔開發:** Storybook 8

## 架構設計 (Architecture)

本專案採用 `pnpm workspaces` 進行 Monorepo 管理，實現關注點分離：

- **`packages/ui`**: 核心組件庫 (Producer)。
  - 特點：邏輯與樣式分離、支援 Tree Shaking、提供 ESM 與 Bundled CSS 雙重輸出。
- **`apps/docs`**: 文檔與展示區 (Consumer)。
  - 特點：使用 **Storybook 8** 建立互動式文檔，模擬真實專案引用情境。

## 快速開始 (Getting Started)

### 前置需求 (Prerequisites)

- Node.js 18+
- pnpm 8+

### 安裝與啟動 (Development)

1. **安裝依賴**
   在專案根目錄執行：
   ```bash
   pnpm install
