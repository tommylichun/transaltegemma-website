# ✅ Cloudflare Pages 最终设置指南

## 当前设置需要修改

### 1. Framework preset
当前：`None`  
应该：`Next.js`

### 2. Build output directory
当前：`/`  
应该：`.next`

## 修改步骤

在 Cloudflare Pages 设置页面中：

### 步骤 1：设置 Framework preset

1. 找到 **"Framework preset"** 下拉菜单
2. 点击下拉菜单
3. 选择 **"Next.js"**

### 步骤 2：修改 Build output directory

1. 找到 **"Build output directory"** 输入框
2. 将值从 `/` 改为 `.next`
3. 这是 Next.js 构建输出的目录

### 步骤 3：检查其他设置

确认以下设置正确：
- ✅ **Project name**: `transaltegemma-website`
- ✅ **Production branch**: `main`
- ✅ **Framework preset**: `Next.js`（需要修改）
- ✅ **Build command**: `npm run build`
- ✅ **Build output directory**: `.next`（需要修改）

### 步骤 4：可选 - 添加环境变量

如果需要，可以展开 **"Environment variables (advanced)"** 并添加：
- **Variable name**: `NEXT_PUBLIC_BASE_URL`
- **Variable value**: `https://chunwacreative.com`

（这不是必需的，因为代码中已有默认值）

### 步骤 5：保存并部署

点击 **"Save and Deploy"** 按钮

## 修改后的完整设置

```
Project name: transaltegemma-website
Production branch: main
Framework preset: Next.js ← 修改这里
Build command: npm run build
Build output directory: .next ← 修改这里
```

## 为什么 Build output directory 必须是 .next？

Next.js 运行 `npm run build` 后，会将构建输出放在 `.next` 目录中。Cloudflare Pages 需要知道这个目录才能正确部署你的网站。

如果设置为 `/`，Cloudflare 会尝试部署根目录的所有文件，包括源代码，这会导致部署失败。

## 完成后

1. 点击 "Save and Deploy"
2. 等待构建完成（通常 2-5 分钟）
3. 访问 `https://transaltegemma-website-35h.pages.dev`

部署应该会成功！
