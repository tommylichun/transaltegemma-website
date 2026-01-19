# 🔧 Cloudflare Pages 找不到仓库 - 解决方案

## 问题：Cloudflare Pages 显示 "No Git repositories found"

## 可能的原因和解决方案

### 1. 仓库名称拼写检查 ⚠️

**注意**：仓库名称是 `transaltegemma-website`（注意是 "transalte" 不是 "translate"）

在 Cloudflare 搜索框中，确保输入：
- ✅ `transaltegemma-website`（正确）
- ❌ `translategemma-website`（错误）

### 2. 刷新 GitHub 授权

1. 在 Cloudflare Pages 界面中，点击右上角的账户设置
2. 进入 "GitHub" 或 "Source Control" 设置
3. 点击 "Reconnect" 或 "Re-authorize"
4. 重新授权 GitHub 访问权限
5. 返回仓库选择页面，再次搜索

### 3. 检查 GitHub 仓库权限

确保：
- 仓库是 **Public** 或
- 你的 GitHub 账户有访问权限（如果是 Private 仓库）
- Cloudflare 应用有访问该仓库的权限

### 4. 使用 "Clone a public repository via Git URL" 选项

如果搜索仍然找不到，可以：

1. 点击 "Clone a public repository via Git URL"
2. 输入完整的 Git URL：
   ```
   https://github.com/tommylichun/transaltegemma-website.git
   ```
   或
   ```
   git@github.com:tommylichun/transaltegemma-website.git
   ```

### 5. 等待 GitHub 同步

有时新创建的仓库需要几分钟才能在 Cloudflare 中显示。等待 2-3 分钟后刷新页面。

### 6. 检查仓库是否真的存在

访问以下 URL 确认仓库存在：
https://github.com/tommylichun/transaltegemma-website

如果页面显示 404，说明仓库不存在或名称错误。

## 快速检查清单

- [ ] 确认仓库名称拼写：`transaltegemma-website`
- [ ] 检查 GitHub 仓库是否可访问
- [ ] 重新授权 Cloudflare 访问 GitHub
- [ ] 尝试使用 Git URL 方式添加
- [ ] 等待几分钟后重试

## 如果以上都不行

可以尝试：
1. 在 GitHub 上确认仓库是 Public
2. 检查 Cloudflare 的 GitHub 应用权限
3. 联系 Cloudflare 支持
