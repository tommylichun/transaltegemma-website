# ⚠️ 重要：Cloudflare Pages vs Workers

## 你当前的问题

你正在创建 **Cloudflare Worker** 项目，但你的 Next.js 网站应该使用 **Cloudflare Pages**！

## 区别

### Cloudflare Pages ✅（正确选择）
- 用于静态网站和 Next.js 应用
- 自动检测框架（Next.js）
- **不需要** deploy command
- 自动部署构建输出
- 支持自动构建和预览

### Cloudflare Workers ❌（你当前选择的）
- 用于服务器端脚本和 API
- **需要** deploy command（`npx wrangler deploy`）
- 不适合 Next.js 网站

## 正确的步骤

### 1. 取消当前的 Worker 创建

点击 **Back** 或关闭当前页面。

### 2. 创建 Pages 项目（不是 Worker）

1. 在 Cloudflare Dashboard 中
2. 进入 **Pages**（不是 Workers）
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 选择你的 GitHub 账户和仓库：`tommylichun/transaltegemma-website`

### 3. 配置 Pages 项目

在设置页面，你应该看到：

✅ **Framework preset**: Next.js（自动检测）  
✅ **Build command**: `npm run build`  
✅ **Deploy command**: （留空，不需要填写）  
✅ **Root directory**: `/` 或留空  
✅ **Build output directory**: `.next`

**重要**：Pages 项目**不会**要求填写 "Deploy command"，因为它是自动的！

## 如何确认你创建的是 Pages 项目

正确的 Pages 设置界面应该：
- ✅ 标题显示 "Pages" 或 "Cloudflare Pages"
- ✅ 有 "Framework preset" 选项（自动检测 Next.js）
- ✅ **没有** "Deploy command" 必填字段
- ✅ 有 "Build output directory" 字段

错误的 Worker 设置界面会：
- ❌ 标题显示 "Workers" 或 "Worker project"
- ❌ **要求**填写 "Deploy command"（红色必填）
- ❌ 没有 "Framework preset" 选项

## 如果已经创建了 Worker 项目

1. 删除或取消当前的 Worker 项目
2. 重新创建，这次选择 **Pages**（不是 Workers）

## 总结

**你的 Next.js 网站 = Cloudflare Pages**  
**不是 Cloudflare Workers**

Pages 会自动处理一切，不需要手动配置 deploy command！
