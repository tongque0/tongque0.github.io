---
title: Go start
authors: [tongque0]
tags: [个人]
description: golang安装及其相关知识
date: 2024-05-01
hide_table_of_contents: false
---

:::tip 前往细节
🔗 **掘金文章：** [一文学会 Golang 安装及其相关知识](https://juejin.cn/post/7428574683190099983)
:::

# 安装

## 官网安装

前往 [Go 官网](https://go.dev/) 下载并安装 Go，建议选择默认安装选项，一键点击下一步，安装程序会自动为你完成大部分配置。

### 代理更换（推荐）

```bash
go env -w GOPROXY=https://goproxy.cn,https://mirrors.cloud.tencent.com/go/,https://mirrors.aliyun.com/goproxy/,direct
```

### 常用工具下载
