# 部署指南 - TranslateGemma Website

## 步骤 1: 本地测试（推荐）

### 启动开发服务器

```bash
cd website/promote
npm run dev
```

然后在浏览器中打开：**http://localhost:3000**

你可以：
- 查看所有语言版本（在右上角切换语言）
- 测试所有功能和动画
- 检查响应式设计（调整浏览器窗口大小）

### 测试所有语言版本

访问以下 URL 测试不同语言：
- 英文: http://localhost:3000/en
- 繁體中文: http://localhost:3000/zh-Hant
- 简体中文: http://localhost:3000/zh-Hans
- 日本語: http://localhost:3000/ja
- 한국어: http://localhost:3000/ko
- Español: http://localhost:3000/es
- Français: http://localhost:3000/fr
- Deutsch: http://localhost:3000/de

---

## 步骤 2: 构建生产版本

### 构建项目

```bash
cd website/promote
npm run build
```

构建完成后，生产文件会在 `.next` 目录中。

### 预览生产版本

```bash
npm start
```

然后在浏览器中打开：**http://localhost:3000**

---

## 步骤 3: 部署到 Cloudflare Pages

### 方法 A: 使用 Git 连接（推荐）

1. **将代码推送到 Git 仓库**（GitHub/GitLab/Bitbucket）

2. **在 Cloudflare Pages 中创建新项目**：
   - 登录 Cloudflare Dashboard
   - 进入 "Pages" → "Create a project"
   - 选择 "Connect to Git"
   - 选择你的 Git 提供商并授权
   - 选择仓库和分支

3. **配置构建设置**：
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `website/promote`

4. **添加环境变量**（可选）：
   - `NEXT_PUBLIC_BASE_URL`: `https://chunwacreative.com`

5. **点击 "Save and Deploy"**

### 方法 B: 直接上传构建文件

⚠️ **注意**: Cloudflare Pages 通常推荐使用 Git 连接，但如果你需要上传文件：

1. **构建项目**：
```bash
cd website/promote
npm run build
```

2. **打包构建文件**：
```bash
# 创建一个包含构建文件的目录结构
mkdir -p deploy
cp -r .next deploy/
cp -r public deploy/
cp package.json deploy/
cp next.config.js deploy/
cp -r node_modules/.next deploy/.next
```

3. **上传到 Cloudflare Pages**：
   - 登录 Cloudflare Dashboard
   - 进入 "Pages" → "Create a project"
   - 选择 "Upload assets"
   - 上传整个项目目录

### 方法 C: 使用 Wrangler CLI（高级）

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 在项目目录中
cd website/promote
npm run build

# 部署
wrangler pages deploy .next --project-name=translategemma-website
```

---

## 步骤 4: 配置自定义域名

1. **在 Cloudflare Pages 项目中**：
   - 进入 "Custom domains"
   - 点击 "Set up a custom domain"
   - 输入 `chunwacreative.com`

2. **DNS 配置**：
   - 在 Cloudflare DNS 中添加 CNAME 记录：
     - 名称: `@` 或 `www`
     - 目标: `your-project.pages.dev`（Cloudflare 提供的域名）

---

## 步骤 5: SEO 验证

部署完成后：

1. **提交 Sitemap**：
   - 访问：`https://chunwacreative.com/sitemap.xml`
   - 在 Google Search Console 中提交此 URL

2. **验证结构化数据**：
   - 使用 [Google Rich Results Test](https://search.google.com/test/rich-results)
   - 测试 URL: `https://chunwacreative.com/en`

3. **检查 robots.txt**：
   - 访问：`https://chunwacreative.com/robots.txt`

---

## 常见问题

### Q: 如何更新网站内容？
A: 更新 `messages/*.json` 文件中的翻译内容，然后重新构建和部署。

### Q: 如何添加新语言？
A: 
1. 在 `messages/` 目录添加新的语言文件（如 `it.json`）
2. 在 `lib/i18n.ts` 的 `locales` 数组中添加语言代码
3. 重新构建和部署

### Q: 如何修改 SEO 信息？
A: 编辑 `lib/metadata.ts` 和 `messages/*.json` 中的 `meta` 部分。

---

## 构建脚本

我已经创建了一个便捷的构建脚本，你可以运行：

```bash
cd website/promote
chmod +x build.sh
./build.sh
```

这会自动执行构建和打包。
