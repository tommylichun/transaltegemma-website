# 🔧 Cloudflare Pages 错误修复

## 错误信息
"Could not find a wrangler.json, wrangler.jsonc, or wrangler.toml file in the provided directory."

## 原因
你使用了 SSH URL (`git@github.com:...`)，但 Cloudflare Pages 需要 HTTPS URL。

## 解决方案

### 方法 1：使用 HTTPS URL（推荐）

在 "Git repository URL" 输入框中，将：

❌ `git@github.com:tommylichun/transaltegemma-website.git`

改为：

✅ `https://github.com/tommylichun/transaltegemma-website.git`

### 方法 2：直接在 GitHub 中选择仓库（更简单）

1. 点击 **"Back"** 按钮
2. 返回上一页，选择 "Connect GitHub account"
3. 授权 Cloudflare 访问 GitHub
4. 然后在搜索框中输入：`transaltegemma-website`
5. 从下拉列表中选择仓库

这样 Cloudflare 会自动检测这是一个 Next.js 项目并配置正确的构建设置。

## 推荐步骤

**最佳做法**：不要使用 "Clone a public repository via Git URL"，而是：

1. 确保 GitHub 账户已连接到 Cloudflare
2. 在搜索框中搜索仓库名称
3. 从列表中选择仓库

这样 Cloudflare Pages 会：
- 自动检测 Next.js 框架
- 自动配置构建命令
- 自动设置输出目录
