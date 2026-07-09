# NEPU 大数据小学期 — 智能问答系统课程文档

基于 MkDocs + Material 主题构建的课程教学文档站点，通过 GitHub Pages 自动部署。

## 本地预览

```bash
# 安装依赖
pip install -r requirements.txt

# 启动本地开发服务器
mkdocs serve
```

浏览器访问 `http://127.0.0.1:8000` 即可预览。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

站点地址：`https://kindear.github.io/nepu_bigdata_docs/`

## 项目结构

```
├── mkdocs.yml          # MkDocs 配置
├── index.md            # 首页
├── requirements.txt    # Python 依赖
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 部署配置
├── 01第一章 项目概述与技术路线/
├── 02第二章 数据采集/
├── 03第三章 数据存储与处理/
├── 04第四章 知识库与RAG问答/
├── 05第五章 Agent与工具调用/
├── 06第六章 系统开发与集成/
├── 07第七章 系统测试与项目验收/
└── 08附录/
```
