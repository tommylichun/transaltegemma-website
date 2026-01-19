#!/bin/bash

# TranslateGemma Website - 测试脚本

echo "🚀 Starting TranslateGemma Website Test..."
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# 启动开发服务器
echo "🌐 Starting development server..."
echo "📍 Local URL: http://localhost:3000"
echo "📍 English: http://localhost:3000/en"
echo "📍 繁體中文: http://localhost:3000/zh-Hant"
echo "📍 简体中文: http://localhost:3000/zh-Hans"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
