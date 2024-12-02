---
title: Go start
authors: [tongque0]
tags: [个人]
description: 我的第一篇博客，让你拥有一样的博客
---
:::tip
一文学会golang安装及其相关知识
:::

# 引言

“安装 Go 不是很简单吗？直接去 [Go 官网](https://go.dev/) 下载就行了啊。”

“唉，我怎么就下载不了 Go 包？换了代理也不行，怎么回事？”

这是我一位刚开始学习 Golang 的朋友在安装过程中遇到的问题。虽然现在 Go 的安装已经变得相当简单，但是依旧会存在一些老gopher不在意，新gopher难处理的小坑。

（**本文将帮助你认识并回顾 Golang 安装过程中的相关知识（本文更新时golang最新版为1.23.3）。** ）

# 安装

## 官网安装

前往 [Go 官网](https://go.dev/) 下载并安装 Go，建议选择默认安装选项，一键点击下一步，安装程序会自动为你完成大部分配置。

## 代理更换（推荐）

在 Go 1.17 之前，切换代理通常需要手动通过 shell 修改环境变量，这种方式有时可能会出现一些问题。从 Go 1.17 版本开始，Go 引入了 `go env -w` 命令，使用 Golang 自带的命令可以更方便、准确地修改 Go 的环境配置。

### 修改代理命令示例：

    go env -w GOPROXY=https://goproxy.cn,https://mirrors.cloud.tencent.com/go/,https://mirrors.aliyun.com/goproxy/,direct

通过这种方式，你可以快速更改 Go 的代理设置，确保能够顺利下载 Go 包。

# 相关知识

## Golang 常用环境变量

| 环境变量            | 说明                  | 默认值                        | 示例                                         |
| --------------- | ------------------- | -------------------------- | ------------------------------------------ |
| `GOPROXY`       | Go 模块代理，指定下载模块的代理源  | `https://proxy.golang.org` | `go env -w GOPROXY=https://goproxy.cn`     |
| `GO111MODULE`   | 控制 Go 模块支持的启用状态     | `auto`                     | `go env -w GO111MODULE=on`                 |
| `GOPATH`        | Go 工作空间的根目录         | `$HOME/go`                 | `go env -w GOPATH=$HOME/go`                |
| `GOROOT`        | Go 安装目录             | Go 安装目录                    | `go env -w GOROOT=/usr/local/go`           |
| `GOCACHE`       | Go 编译缓存目录           | `$HOME/.cache/go-build`    | `go env -w GOCACHE=$HOME/.cache/go-build`  |
| `GOMODCACHE`    | Go 模块缓存目录           | `$GOPATH/pkg/mod`          | `go env -w GOMODCACHE=$HOME/go/pkg/mod`    |
| `GOOS`          | 目标操作系统，用于交叉编译       | 当前操作系统                     | `go env -w GOOS=linux`                     |
| `GOARCH`        | 目标架构，用于交叉编译         | 当前架构                       | `go env -w GOARCH=amd64`                   |
| `GOTMPDIR`      | 临时目录，用于存放编译过程中的临时文件 | `/tmp`                     | `go env -w GOTMPDIR=$HOME/go_tmp`          |
| `GOMODULECACHE` | 存储已下载模块的缓存目录        | `$GOPATH/pkg/mod`          | `go env -w GOMODULECACHE=$HOME/go/pkg/mod` |
| `GOPRIVATE`     | 设置私有模块的地址           | 无                          | `go env -w GOPRIVATE=example.com/private`  |
| `GOTRACEBACK`   | Go 错误追踪的详细程度        | `none`                     | `go env -w GOTRACEBACK=full`               |
| `GOGC`          | 控制 Go 垃圾回收的频率       | `100`                      | `go env -w GOGC=200`                       |
| `GOSUMDB`       | Go 模块的校验数据库         | `sum.golang.org`           | `go env -w GOSUMDB=sum.golang.org`         |
| `GOFLAGS`       | Go 命令的默认标志          | 无                          | `go env -w GOFLAGS="-mod=vendor"`          |

***

### 修改环境变量的方法

推荐使用带参数的 `go env` 命令来修改 Go 的环境变量。具体的命令有：

*   **`go env -w`**：用来设置或修改环境变量。
*   **`go env -u`**：用来恢复到默认值。

#### 示例：

1.  **设置 `GOPROXY` 代理**：

        go env -w GOPROXY=https://goproxy.cn

2.  **恢复 `GOPROXY` 到默认值**：

        go env -u GOPROXY

通过使用 `go env -w` 和 `go env -u`，可以方便地设置或重置 Go 的环境变量，这些设置会持久化生效，而不需要每次重新配置。

# Go常用命令

| 命令              | 说明                                 | 示例                                |
| --------------- | ---------------------------------- | --------------------------------- |
| `go version`    | 显示当前安装的 Go 版本                      | `go version`                      |
| `go run`        | 编译并运行 Go 源文件                       | `go run main.go`                  |
| `go build`      | 编译 Go 源文件，生成可执行文件                  | `go build -o myapp main.go`       |
| `go test`       | 运行 Go 项目的测试                        | `go test -v`                      |
| `go mod`        | 管理 Go 模块和依赖                        | `go mod tidy`                     |
| `go get`        | 下载并安装远程 Go 包及其依赖                   | `go get github.com/gin-gonic/gin` |
| `go install`    | 编译并安装 Go 程序，生成可执行文件并放入 `$GOBIN` 目录 | `go install myapp`                |
| `go fmt`        | 格式化 Go 源代码，确保代码风格一致                | `go fmt main.go`                  |
| `go env`        | 显示当前 Go 环境变量配置                     | `go env`                          |
| `go doc`        | 查看 Go 包或函数的文档                      | `go doc fmt.Println`              |
| `go clean`      | 清理构建过程中产生的临时文件                     | `go clean -i`                     |
| `go list`       | 列出 Go 包的信息                         | `go list -m all`                  |
| `go mod init`   | 初始化 Go 模块，生成 `go.mod` 文件           | `go mod init mymodule`            |
| `go mod vendor` | 将所有依赖包复制到 `vendor` 目录              | `go mod vendor`                   |
| `go run`        | 编译并执行指定的 Go 文件，快速运行脚本              | `go run main.go`                  |
| `go version`    | 查看 Go 版本信息                         | `go version`                      |

### `go install` 命令

*   **功能**：编译指定的 Go 文件并将生成的可执行文件安装到 `$GOBIN` 目录。如果没有设置 `$GOBIN`，默认会安装到 `$GOPATH/bin`。
*   **适用场景**：通常用于安装并运行单个 Go 程序，或者将开发的工具安装到全局路径以便在**终端中直接调用**。
*   **使用效果**：

    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/64cfc679f41c46bb8742f247a79b8bfb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ZCM6ZiZ:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTc4NTY5MzEzNTMyNTM1In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1733748885&x-orig-sign=0gU0hJCZ1SfQVWlXab%2FHAMc4wVQ%3D)

#### 示例 1：安装本地包

假设你有一个本地的 Go 程序，包含一个 `main.go` 文件。你可以通过 `go install` 将它编译并安装到 `$GOBIN` 或 `$GOPATH/bin` 目录下。

    go install ./myapp

*   该命令会编译 `myapp` 包，并将生成的可执行文件放到 `$GOBIN` 或 `$GOPATH/bin` 目录。你可以通过命令行直接运行该可执行文件。

#### 示例 2：安装远程包

如果你想安装一个远程的 Go 包（例如，GitHub 上的 Go 工具），可以使用 `go install` 命令指定该包的远程路径。

    go install github.com/hhatto/gocloc/cmd/gocloc@latest

*   这个命令会从 `github.com/hhatto/gocloc/cmd/gocloc@latest` 下载最新版本的 Go 语言代码统计侗剧`gocloc`，然后将其安装到 `$GOBIN` 或 `$GOPATH/bin` 目录中。

#### 注意事项

**Go 1.17 及更高版本**：从 Go 1.17 开始，`go install` 需要指定包的版本（例如 `@latest` 或 `@vX.X.X`）。在 Go 1.16 之前，`go install` 默认会安装当前版本。

是的，**`go get`** 和 **`go install`** 确实有很多重叠的功能，特别是在 Go 1.17 及以后版本。尽管它们的核心用途略有不同，但在大多数情况下，**`go install`** 已经可以替代 **`go get`** 来完成很多安装任务，尤其是安装可执行文件方面。

### `go get` 命令

**一句话总结：我不太用**

*   **`go get`** 和 **`go install`** 在 Go 1.17 以后有一定的重叠，尤其在安装可执行文件方面。
*   但 **`go install`** 更加专注于安装可执行文件（尤其是安装工具）。
*   如果你只需要安装或更新可执行文件，应该优先使用 **`go install`**。
*   **`go get`** 更加适用于管理依赖和更新 `go.mod` 文件。

| 命令               | 功能描述                          | 适用场景                           | 重要区别                                       |
| ---------------- | ----------------------------- | ------------------------------ | ------------------------------------------ |
| **`go get`**     | 获取并安装依赖包，更新 `go.mod` 文件，下载模块。 | 获取远程模块依赖，更新项目的模块配置。            | **不推荐用于安装可执行文件**，主要用于依赖管理。                 |
| **`go install`** | 编译并安装指定的 Go 可执行文件（主程序包）。      | 安装并编译单个 Go 程序/工具，安装到 `$GOBIN`。 | **推荐用于安装可执行文件**，从 Go 1.17 开始，安装可执行文件的首选方法。 |

### `go mod tidy` 命令

**一句话总结**：**代码跑不起来，先来一遍 `go mod tidy`**。

#### 功能：

`go mod tidy` 命令用于清理和整理 Go 模块的依赖，确保 `go.mod` 和 `go.sum` 文件只包含项目实际需要的依赖项，并移除那些未使用的依赖。它会自动修复 `go.mod` 文件，更新 `go.sum`，并移除不再需要的模块。

#### 工作原理：

*   **移除未使用的模块**：自动删除 `go.mod` 中声明，但代码中未实际使用的模块。
*   **添加缺失的模块**：如果 `go.mod` 文件中缺少某些实际使用的模块，`go mod tidy` 会自动添加这些模块。
*   **同步 `go.sum`**：确保 `go.sum` 中只有当前 `go.mod` 文件所需要的依赖的哈希值，去除过期的哈希。

#### 解决常见问题：

*   **无法找到依赖**：如果你遇到错误提示某些依赖缺失，执行 `go mod tidy` 后会自动修复。
*   **模块版本冲突**：有时依赖版本冲突或者重复声明，执行 `go mod tidy` 可以帮助清理这些问题。

### `go run .` 命令

**一句话总结：把你写的 Go 代码跑起来。**

#### 使用方法：

1.  **移动到项目入口文件所在目录**，然后在终端运行：

        go run .

    其中，`"."` 代表当前目录，Go 会将当前目录下的所有 `.go` 文件编译并执行。如果你只有一个文件或多个文件都包含 `main` 函数，它们都会被一起执行。

2.  **指定文件运行**： 如果你只想运行特定的 Go 文件，可以指定文件名：

        go run main.go

    这将只编译并执行 `main.go` 文件。

#### 为什么使用 `go run .`：

*   **多个 `main` 包**：在一些较大的项目中，你可能会有多个包含 `main` 函数的包，或者多个入口文件。通过 `go run .`，Go 会自动识别并运行当前目录下的所有 `.go` 文件，避免你忘记运行某个入口文件。
*   **便于调试**：使用 `go run .` 可以快速运行整个项目而不需要手动指定每个文件，适合快速开发和调试。

### go build 命令

**一句话总结：编译你的 Go 程序，生成可执行文件。**

新手不太用，留着以后再说。
