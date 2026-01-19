# 🔧 Cloudflare Pages 正确设置

## ❌ 当前错误配置

你的 Cloudflare Pages 设置中有：
- **Deploy command**: `npx wrangler deploy` ← **这是错误的！**

## ✅ 正确的设置

Cloudflare Pages 需要以下设置：

### 方法 1：在 Cloudflare Dashboard 中修改

1. 进入 Cloudflare Dashboard
2. 选择你的 Pages 项目：`transaltegemma-website`
3. 进入 **Settings** → **Builds & deployments**
4. 找到 **Build settings**
5. **删除或清空 Deploy command 字段**（留空）
6. 确保设置如下：
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Deploy command**: （留空，不要填写任何内容）
   - **Root directory**: `/` 或留空
   - **Build output directory**: `.next`
7. 点击 **Save**

### 方法 2：使用 wrangler.toml（不推荐用于 Pages）

如果你看到有 `wrangler.toml` 文件，那可能是问题所在。Cloudflare Pages 不需要 `wrangler.toml`，那个文件是用于 Workers 的。

## ✅ 正确的 Cloudflare Pages 设置

```
Framework preset: Next.js (自动检测)
Build command: npm run build
Deploy command: （留空）
Root directory: /（或留空，因为代码在根目录）
Build output directory: .next
```

## 为什么 Deploy command 是错的？

- **Cloudflare Pages**: 自动部署 `.next` 目录中的内容，**不需要** deploy command
- **Cloudflare Workers**: 需要 `wrangler deploy` 命令

你的项目是 Next.js 应用，应该使用 Pages（不是 Workers），所以**不应该**有 deploy command。

## 修复后

1. 保存设置
2. 点击 **Retry build** 重新构建
3. 这次应该会成功！

## 环境变量（可选）

如果需要，可以添加：
- `NEXT_PUBLIC_BASE_URL` = `https://chunwacreative.com`

但这不是必需的，因为我们已经在代码中设置了默认值。
