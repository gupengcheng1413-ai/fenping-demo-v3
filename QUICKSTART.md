# 分屏演示项目 - 快速启动指南

## 项目信息

- **项目名称：** 分屏演示（fenping demo）
- **项目位置：** `/home/pcgu3/fenping demo/Claude code fenping`
- **屏幕规格：** 5.6寸长条屏，分辨率 1640×348
- **技术栈：** React 18 + TypeScript + Vite 6 + Tailwind CSS 4

---

## 快速启动

### 1. 启动开发服务器

```bash
cd "/home/pcgu3/fenping demo/Claude code fenping"
npm run dev
```

**访问地址：** http://localhost:5173/

### 2. 设置浏览器视口

由于这是为长条屏设计的应用，需要设置正确的视口：

1. 按 F12 打开 Chrome DevTools
2. 按 Ctrl+Shift+M 切换到设备模拟模式
3. 添加自定义设备：
   - 宽度：**1640px**
   - 高度：**348px**
   - 设备像素比：1

### 3. 开始测试

详细的测试步骤请查看：`TESTING_GUIDE.md`

---

## 项目结构

```
/home/pcgu3/fenping demo/Claude code fenping/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # 主应用，帧管理
│   │   └── components/
│   │       ├── ensentence-fenping.tsx # 分屏同步滚动
│   │       ├── history-overlay.tsx    # 导航覆盖层
│   │       └── ...
│   ├── imports/                       # 31个学习模块组件
│   │   ├── ShouyeHistory/            # 首页历史记录
│   │   ├── HanziShanFenping/         # 汉字-山-分屏
│   │   ├── CiyuMeili/                # 词语-美丽
│   │   └── ...
│   ├── assets/                        # 图片资源
│   └── main.tsx                       # 应用入口
├── package.json                       # 依赖声明
├── vite.config.ts                     # Vite配置
├── index.html                         # HTML入口
├── TESTING_GUIDE.md                   # 详细测试指南
└── README.md                          # 项目说明

node_modules/                          # 285个依赖包
dist/                                  # 生产构建产物
```

---

## 核心功能

### 1. 历史记录导航
- 首页显示 11 行学习模块列表
- 点击任意模块进入详细页面
- 左上角返回按钮回到首页

### 2. 分屏同步滚动（核心功能）
- 英文句子-分屏模块
- 左侧英文，右侧中文
- 双向滚动自动同步
- 活跃句子高亮显示

### 3. 固定区域布局
- 左侧固定区域（可滚动）
- 中间滚动区域
- 右侧固定区域（装饰）

### 4. 24个学习模块
- 汉字模块（山、河）
- 词语模块（美丽、朝阳）
- 拼音模块
- 诗句模块（静夜思等）
- 英文句子模块
- 歇后语模块

---

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览生产构建
npm run preview

# 安装依赖（如果需要）
npm install

# 检查服务器状态
curl http://localhost:5173/
```

---

## 技术亮点

### 1. 固定视口设计
```typescript
const VIEW_W = 1640;
const VIEW_H = 348;
```

### 2. 分屏同步滚动算法
- 使用 `useRef` 管理锁定状态
- `syncingRef` 防止递归同步
- `findActiveIdx()` 计算活跃句子
- `requestAnimationFrame` 优化性能

### 3. Figma 资源自动解析
- `figma:asset/` 路径自动转换为 `src/assets/`
- Vite 插件 `figmaAssetResolver()` 处理

### 4. 响应式布局系统
- 每个帧独立的尺寸配置
- 固定区域 + 滚动区域组合
- 精确的像素级控制

---

## 已完成的任务

✅ 创建目标目录并复制项目文件  
✅ 安装项目依赖（285个包）  
✅ 启动开发服务器（http://localhost:5173/）  
✅ 生产构建测试（成功）  
✅ 创建详细测试指南

---

## 下一步

1. **浏览器测试**：按照 `TESTING_GUIDE.md` 进行完整的功能测试
2. **性能优化**（可选）：如果需要，可以进行代码分割优化
3. **部署**（可选）：将 `dist/` 目录部署到服务器

---

## 注意事项

1. **视口尺寸**：必须设置为 1640×348，否则布局会错乱
2. **分屏滚动**：这是核心功能，必须重点测试
3. **资源加载**：确保所有图片正常加载
4. **浏览器兼容性**：推荐使用 Chrome 或 Edge

---

## 故障排查

如果遇到问题，请查看：
1. `TESTING_GUIDE.md` 的故障排查章节
2. 开发服务器日志
3. 浏览器控制台错误信息

---

## 项目状态

- ✅ 文件复制完成
- ✅ 依赖安装完成
- ✅ 开发服务器运行中
- ✅ 生产构建成功
- ✅ 测试指南已创建

**开发服务器地址：** http://localhost:5173/

**开始测试吧！** 🚀
