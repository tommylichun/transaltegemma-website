#!/bin/bash

# TranslateGemma Website - 构建脚本

echo "🔨 Building TranslateGemma Website for production..."
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# 清理之前的构建
echo "🧹 Cleaning previous build..."
rm -rf .next
echo ""

# 构建项目
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "📦 Build files are in: .next/"
    echo ""
    echo "🧪 To preview the production build, run:"
    echo "   npm start"
    echo ""
    echo "🚀 To deploy, you can:"
    echo "   1. Connect to Cloudflare Pages via Git (recommended)"
    echo "   2. Or upload the .next directory to Cloudflare Pages"
    echo ""
else
    echo ""
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
