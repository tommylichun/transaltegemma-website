# 🚀 快速开始指南

## ✅ 第一步：本地测试（必须！）

### 方法 1：使用测试脚本（推荐）

```bash
cd website/promote
./test.sh
```

### 方法 2：直接运行命令

```bash
cd website/promote
npm run dev
```

然后在浏览器中打开：**http://localhost:3000**

### 测试不同语言版本：

- 🇺🇸 英文: http://localhost:3000/en
- 🇹🇼 繁體中文: http://localhost:3000/zh-Hant
- 🇨🇳 简体中文: http://localhost:3000/zh-Hans
- 🇯🇵 日本語: http://localhost:3000/ja
- 🇰🇷 한국어: http://localhost:3000/ko
- 🇪🇸 Español: http://localhost:3000/es
- 🇫🇷 Français: http://localhost:3000/fr
- 🇩🇪 Deutsch: http://localhost:3000/de

---

## 📦 第二步：构建生产版本

```bash
cd website/promote
./build.sh
```

或者：

```bash
npm run build
```

构建完成后，可以使用 `npm start` 预览生产版本。

---

## 🌐 第三步：部署到 Cloudflare Pages

### ⚠️ 重要提示

**Next.js 应用不能简单地通过上传 ZIP 文件到 Cloudflare Pages**，因为 Next.js 需要 Node.js 运行时环境。

### 推荐方法：Git 连接

1. **将代码推送到 GitHub/GitLab/Bitbucket**

2. **在 Cloudflare Pages 中**：
   - 登录 Cloudflare Dashboard
   - Pages → Create a project → Connect to Git
   - 选择你的仓库
   - 配置设置：
     - Framework preset: **Next.js**
     - Build command: `npm run build`
     - Build output directory: `.next`
     - Root directory: `website/promote`（如果项目在子目录中）
   - 添加环境变量（可选）：
     - `NEXT_PUBLIC_BASE_URL` = `https://chunwacreative.com`
   - 点击 Deploy

### 备选方法：使用 Wrangler CLI

如果你想通过命令行部署：

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
cd website/promote
npm run build

# 部署
wrangler pages deploy .next --project-name=translategemma-website
```

### 关于 ZIP 文件

**不建议直接上传 ZIP**，因为：
- Next.js 需要构建过程
- Cloudflare Pages 会自动检测 Next.js 并运行构建
- 上传的静态文件无法利用 Next.js 的动态功能

但如果你真的需要打包（用于备份或其他用途），可以运行：

```bash
cd website/promote
zip -r translategemma-website.zip . -x "node_modules/*" ".next/*" ".git/*"
```

---

## 🎯 部署后的步骤

1. **配置自定义域名** `chunwacreative.com`
2. **提交 Sitemap** 到 Google Search Console
3. **验证 SEO** 结构化数据

详细步骤请查看 `DEPLOYMENT.md`
