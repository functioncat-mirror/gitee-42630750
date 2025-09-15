# React + TailwindCSS + ShadcnUI + Vite 模板

这是一个基础模板，可以在FunctionCat中进行设置、配置、扩展和部署。它包括：

- React 18
- TypeScript
- TailwindCSS
- ShadcnUI 组件
- Vite 构建工具

## 功能特性

- 🚀 现代化的 React 和 TypeScript
- 🎨 TailwindCSS 样式定制和主题
- 🧱 预配置的 ShadcnUI 组件
- ⚡ Vite 快速开发和构建
- 📁 遵循最佳实践的文件结构
- 🌙 Light/Dark 模式支持
- 📱 完全响应式设计
- 🎯 支持 FunctionCat 部署

## 开始使用

1. 克隆此模板
2. 安装依赖:
   ```bash
   npm install
   ```
3. 启动开发服务器:
   ```bash
   npm run dev
   ```

## 项目结构

```
.
├── src/
│   ├── assets/           # 静态资源
│   ├── components/       # React 组件
│   │   └── ui/           # ShadcnUI 组件
│   ├── lib/              # 工具函数
│   ├── App.tsx           # 主应用组件
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局样式
├── components.json       # ShadcnUI 配置
├── tailwind.config.js    # TailwindCSS 配置
├── postcss.config.js     # PostCSS 配置
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 依赖和脚本
```

## Light/Dark 模式

此模板内置了 Light 和 Dark 主题支持：

- 自动检测系统主题偏好
- 保存用户主题偏好到 localStorage
- 头部有切换按钮
- 可完全自定义配色方案

要自定义主题颜色，请修改 `src/index.css` 中的 CSS 变量。

## 响应式设计

模板完全响应式，在所有设备尺寸上都能正常工作：

- 移动优先的方法
- 响应式网格布局
- 自适应组件
- 触摸友好的导航

## 可用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产构建
- `npm run lint` - 运行 ESLint

## 添加 ShadcnUI 组件

您可以使用 CLI 添加更多 ShadcnUI 组件：

```bash
npx shadcn-ui@latest add button
```

## 部署

此模板已准备好在 FunctionCat 上部署。只需按照 FunctionCat 平台中的标准部署流程操作即可。

## 自定义

- 修改 `tailwind.config.js` 自定义主题
- 在 `src/components/` 中添加新组件
- 在 `src/lib/utils.ts` 中扩展工具函数
- 在 `src/index.css` 中更新全局样式