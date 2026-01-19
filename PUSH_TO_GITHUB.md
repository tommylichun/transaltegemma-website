# 🚀 推送到 GitHub 指南

## 当前状态

✅ Git 仓库已初始化  
✅ 代码已提交到本地  
✅ 远程仓库已配置: `git@github.com:tommylichun/transaltegemma-website.git`

## 下一步：推送到 GitHub

运行以下命令将代码推送到 GitHub：

```bash
cd "/Users/chunwali/Desktop/planning/项目案例库/iOS应用/Translate Gemma/website/promote"

# 推送到 GitHub（第一次推送）
git push -u origin main
```

如果是第一次推送，可能需要：

### 方法 1: 如果仓库已存在但为空
```bash
git push -u origin main
```

### 方法 2: 如果仓库不存在，GitHub 会提示创建
先确保 GitHub 上已创建仓库 `transaltegemma-website`，然后运行：
```bash
git push -u origin main
```

### 方法 3: 如果遇到冲突
```bash
# 先拉取远程更改（如果有）
git pull origin main --allow-unrelated-histories

# 然后推送
git push -u origin main
```

## 推送完成后

1. **在 Cloudflare Pages 中连接仓库**：
   - 登录 Cloudflare Dashboard
   - Pages → Create a project → Connect to Git
   - 选择 `tommylichun/transaltegemma-website`
   - 配置设置：
     - Framework preset: **Next.js**
     - Build command: `npm run build`
     - Build output directory: `.next`
     - Root directory: （留空，因为代码在根目录）
   - 添加环境变量：
     - `NEXT_PUBLIC_BASE_URL` = `https://chunwacreative.com`
   - Deploy!

2. **自动部署**：
   - 以后每次 `git push` 都会自动触发部署

## 常用 Git 命令

```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "你的提交信息"

# 推送到 GitHub
git push

# 查看远程仓库
git remote -v
```
