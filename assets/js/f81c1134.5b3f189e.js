"use strict";(self.webpackChunktongque_0_github_io=self.webpackChunktongque_0_github_io||[]).push([[130],{7735:o=>{o.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/Go\u5b89\u88c5","metadata":{"permalink":"/blog/2024/Go\u5b89\u88c5","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/Go\u5b89\u88c5.md","source":"@site/blog/2024/Go\u5b89\u88c5.md","title":"Go start","description":"\u6211\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2\uff0c\u8ba9\u4f60\u62e5\u6709\u4e00\u6837\u7684\u535a\u5ba2","date":"2024-12-02T13:00:27.000Z","tags":[{"inline":false,"label":"\u4e2a\u4eba","permalink":"/blog/tags/\u4e2a\u4eba","description":"\u4e2a\u4eba\u76f8\u5173\u7684\u6587\u7ae0"}],"readingTime":11.765,"hasTruncateMarker":false,"authors":[{"name":"\u540c\u9619","title":"Just for gopher","url":"https://github.com/tongque0","page":{"permalink":"/blog/authors/tongque-0"},"socials":{"github":"https://github.com/tongque0","juejin":"https://juejin.cn/user/178569313532535"},"imageURL":"https://github.com/tongque0.png","key":"tongque0"}],"frontMatter":{"title":"Go start","authors":["tongque0"],"tags":["\u4e2a\u4eba"],"description":"\u6211\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2\uff0c\u8ba9\u4f60\u62e5\u6709\u4e00\u6837\u7684\u535a\u5ba2"},"unlisted":false,"nextItem":{"title":"Hello World","permalink":"/blog/2024/Hello World"}},"content":":::tip\\n\u4e00\u6587\u5b66\u4f1agolang\u5b89\u88c5\u53ca\u5176\u76f8\u5173\u77e5\u8bc6\\n:::\\n\\n# \u5f15\u8a00\\n\\n\u201c\u5b89\u88c5 Go \u4e0d\u662f\u5f88\u7b80\u5355\u5417\uff1f\u76f4\u63a5\u53bb [Go \u5b98\u7f51](https://go.dev/) \u4e0b\u8f7d\u5c31\u884c\u4e86\u554a\u3002\u201d\\n\\n\u201c\u5509\uff0c\u6211\u600e\u4e48\u5c31\u4e0b\u8f7d\u4e0d\u4e86 Go \u5305\uff1f\u6362\u4e86\u4ee3\u7406\u4e5f\u4e0d\u884c\uff0c\u600e\u4e48\u56de\u4e8b\uff1f\u201d\\n\\n\u8fd9\u662f\u6211\u4e00\u4f4d\u521a\u5f00\u59cb\u5b66\u4e60 Golang \u7684\u670b\u53cb\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u3002\u867d\u7136\u73b0\u5728 Go \u7684\u5b89\u88c5\u5df2\u7ecf\u53d8\u5f97\u76f8\u5f53\u7b80\u5355\uff0c\u4f46\u662f\u4f9d\u65e7\u4f1a\u5b58\u5728\u4e00\u4e9b\u8001gopher\u4e0d\u5728\u610f\uff0c\u65b0gopher\u96be\u5904\u7406\u7684\u5c0f\u5751\u3002\\n\\n\uff08**\u672c\u6587\u5c06\u5e2e\u52a9\u4f60\u8ba4\u8bc6\u5e76\u56de\u987e Golang \u5b89\u88c5\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u77e5\u8bc6\uff08\u672c\u6587\u66f4\u65b0\u65f6golang\u6700\u65b0\u7248\u4e3a1.23.3\uff09\u3002** \uff09\\n\\n# \u5b89\u88c5\\n\\n## \u5b98\u7f51\u5b89\u88c5\\n\\n\u524d\u5f80 [Go \u5b98\u7f51](https://go.dev/) \u4e0b\u8f7d\u5e76\u5b89\u88c5 Go\uff0c\u5efa\u8bae\u9009\u62e9\u9ed8\u8ba4\u5b89\u88c5\u9009\u9879\uff0c\u4e00\u952e\u70b9\u51fb\u4e0b\u4e00\u6b65\uff0c\u5b89\u88c5\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u4e3a\u4f60\u5b8c\u6210\u5927\u90e8\u5206\u914d\u7f6e\u3002\\n\\n## \u4ee3\u7406\u66f4\u6362\uff08\u63a8\u8350\uff09\\n\\n\u5728 Go 1.17 \u4e4b\u524d\uff0c\u5207\u6362\u4ee3\u7406\u901a\u5e38\u9700\u8981\u624b\u52a8\u901a\u8fc7 shell \u4fee\u6539\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6709\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e00\u4e9b\u95ee\u9898\u3002\u4ece Go 1.17 \u7248\u672c\u5f00\u59cb\uff0cGo \u5f15\u5165\u4e86 `go env -w` \u547d\u4ee4\uff0c\u4f7f\u7528 Golang \u81ea\u5e26\u7684\u547d\u4ee4\u53ef\u4ee5\u66f4\u65b9\u4fbf\u3001\u51c6\u786e\u5730\u4fee\u6539 Go \u7684\u73af\u5883\u914d\u7f6e\u3002\\n\\n### \u4fee\u6539\u4ee3\u7406\u547d\u4ee4\u793a\u4f8b\uff1a\\n\\n    go env -w GOPROXY=https://goproxy.cn,https://mirrors.cloud.tencent.com/go/,https://mirrors.aliyun.com/goproxy/,direct\\n\\n\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u66f4\u6539 Go \u7684\u4ee3\u7406\u8bbe\u7f6e\uff0c\u786e\u4fdd\u80fd\u591f\u987a\u5229\u4e0b\u8f7d Go \u5305\u3002\\n\\n# \u76f8\u5173\u77e5\u8bc6\\n\\n## Golang \u5e38\u7528\u73af\u5883\u53d8\u91cf\\n\\n| \u73af\u5883\u53d8\u91cf            | \u8bf4\u660e                  | \u9ed8\u8ba4\u503c                        | \u793a\u4f8b                                         |\\n| --------------- | ------------------- | -------------------------- | ------------------------------------------ |\\n| `GOPROXY`       | Go \u6a21\u5757\u4ee3\u7406\uff0c\u6307\u5b9a\u4e0b\u8f7d\u6a21\u5757\u7684\u4ee3\u7406\u6e90  | `https://proxy.golang.org` | `go env -w GOPROXY=https://goproxy.cn`     |\\n| `GO111MODULE`   | \u63a7\u5236 Go \u6a21\u5757\u652f\u6301\u7684\u542f\u7528\u72b6\u6001     | `auto`                     | `go env -w GO111MODULE=on`                 |\\n| `GOPATH`        | Go \u5de5\u4f5c\u7a7a\u95f4\u7684\u6839\u76ee\u5f55         | `$HOME/go`                 | `go env -w GOPATH=$HOME/go`                |\\n| `GOROOT`        | Go \u5b89\u88c5\u76ee\u5f55             | Go \u5b89\u88c5\u76ee\u5f55                    | `go env -w GOROOT=/usr/local/go`           |\\n| `GOCACHE`       | Go \u7f16\u8bd1\u7f13\u5b58\u76ee\u5f55           | `$HOME/.cache/go-build`    | `go env -w GOCACHE=$HOME/.cache/go-build`  |\\n| `GOMODCACHE`    | Go \u6a21\u5757\u7f13\u5b58\u76ee\u5f55           | `$GOPATH/pkg/mod`          | `go env -w GOMODCACHE=$HOME/go/pkg/mod`    |\\n| `GOOS`          | \u76ee\u6807\u64cd\u4f5c\u7cfb\u7edf\uff0c\u7528\u4e8e\u4ea4\u53c9\u7f16\u8bd1       | \u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf                     | `go env -w GOOS=linux`                     |\\n| `GOARCH`        | \u76ee\u6807\u67b6\u6784\uff0c\u7528\u4e8e\u4ea4\u53c9\u7f16\u8bd1         | \u5f53\u524d\u67b6\u6784                       | `go env -w GOARCH=amd64`                   |\\n| `GOTMPDIR`      | \u4e34\u65f6\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u653e\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u7684\u4e34\u65f6\u6587\u4ef6 | `/tmp`                     | `go env -w GOTMPDIR=$HOME/go_tmp`          |\\n| `GOMODULECACHE` | \u5b58\u50a8\u5df2\u4e0b\u8f7d\u6a21\u5757\u7684\u7f13\u5b58\u76ee\u5f55        | `$GOPATH/pkg/mod`          | `go env -w GOMODULECACHE=$HOME/go/pkg/mod` |\\n| `GOPRIVATE`     | \u8bbe\u7f6e\u79c1\u6709\u6a21\u5757\u7684\u5730\u5740           | \u65e0                          | `go env -w GOPRIVATE=example.com/private`  |\\n| `GOTRACEBACK`   | Go \u9519\u8bef\u8ffd\u8e2a\u7684\u8be6\u7ec6\u7a0b\u5ea6        | `none`                     | `go env -w GOTRACEBACK=full`               |\\n| `GOGC`          | \u63a7\u5236 Go \u5783\u573e\u56de\u6536\u7684\u9891\u7387       | `100`                      | `go env -w GOGC=200`                       |\\n| `GOSUMDB`       | Go \u6a21\u5757\u7684\u6821\u9a8c\u6570\u636e\u5e93         | `sum.golang.org`           | `go env -w GOSUMDB=sum.golang.org`         |\\n| `GOFLAGS`       | Go \u547d\u4ee4\u7684\u9ed8\u8ba4\u6807\u5fd7          | \u65e0                          | `go env -w GOFLAGS=\\"-mod=vendor\\"`          |\\n\\n***\\n\\n### \u4fee\u6539\u73af\u5883\u53d8\u91cf\u7684\u65b9\u6cd5\\n\\n\u63a8\u8350\u4f7f\u7528\u5e26\u53c2\u6570\u7684 `go env` \u547d\u4ee4\u6765\u4fee\u6539 Go \u7684\u73af\u5883\u53d8\u91cf\u3002\u5177\u4f53\u7684\u547d\u4ee4\u6709\uff1a\\n\\n*   **`go env -w`**\uff1a\u7528\u6765\u8bbe\u7f6e\u6216\u4fee\u6539\u73af\u5883\u53d8\u91cf\u3002\\n*   **`go env -u`**\uff1a\u7528\u6765\u6062\u590d\u5230\u9ed8\u8ba4\u503c\u3002\\n\\n#### \u793a\u4f8b\uff1a\\n\\n1.  **\u8bbe\u7f6e `GOPROXY` \u4ee3\u7406**\uff1a\\n\\n        go env -w GOPROXY=https://goproxy.cn\\n\\n2.  **\u6062\u590d `GOPROXY` \u5230\u9ed8\u8ba4\u503c**\uff1a\\n\\n        go env -u GOPROXY\\n\\n\u901a\u8fc7\u4f7f\u7528 `go env -w` \u548c `go env -u`\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u8bbe\u7f6e\u6216\u91cd\u7f6e Go \u7684\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u4e9b\u8bbe\u7f6e\u4f1a\u6301\u4e45\u5316\u751f\u6548\uff0c\u800c\u4e0d\u9700\u8981\u6bcf\u6b21\u91cd\u65b0\u914d\u7f6e\u3002\\n\\n# Go\u5e38\u7528\u547d\u4ee4\\n\\n| \u547d\u4ee4              | \u8bf4\u660e                                 | \u793a\u4f8b                                |\\n| --------------- | ---------------------------------- | --------------------------------- |\\n| `go version`    | \u663e\u793a\u5f53\u524d\u5b89\u88c5\u7684 Go \u7248\u672c                      | `go version`                      |\\n| `go run`        | \u7f16\u8bd1\u5e76\u8fd0\u884c Go \u6e90\u6587\u4ef6                       | `go run main.go`                  |\\n| `go build`      | \u7f16\u8bd1 Go \u6e90\u6587\u4ef6\uff0c\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6                  | `go build -o myapp main.go`       |\\n| `go test`       | \u8fd0\u884c Go \u9879\u76ee\u7684\u6d4b\u8bd5                        | `go test -v`                      |\\n| `go mod`        | \u7ba1\u7406 Go \u6a21\u5757\u548c\u4f9d\u8d56                        | `go mod tidy`                     |\\n| `go get`        | \u4e0b\u8f7d\u5e76\u5b89\u88c5\u8fdc\u7a0b Go \u5305\u53ca\u5176\u4f9d\u8d56                   | `go get github.com/gin-gonic/gin` |\\n| `go install`    | \u7f16\u8bd1\u5e76\u5b89\u88c5 Go \u7a0b\u5e8f\uff0c\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u653e\u5165 `$GOBIN` \u76ee\u5f55 | `go install myapp`                |\\n| `go fmt`        | \u683c\u5f0f\u5316 Go \u6e90\u4ee3\u7801\uff0c\u786e\u4fdd\u4ee3\u7801\u98ce\u683c\u4e00\u81f4                | `go fmt main.go`                  |\\n| `go env`        | \u663e\u793a\u5f53\u524d Go \u73af\u5883\u53d8\u91cf\u914d\u7f6e                     | `go env`                          |\\n| `go doc`        | \u67e5\u770b Go \u5305\u6216\u51fd\u6570\u7684\u6587\u6863                      | `go doc fmt.Println`              |\\n| `go clean`      | \u6e05\u7406\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u4e34\u65f6\u6587\u4ef6                     | `go clean -i`                     |\\n| `go list`       | \u5217\u51fa Go \u5305\u7684\u4fe1\u606f                         | `go list -m all`                  |\\n| `go mod init`   | \u521d\u59cb\u5316 Go \u6a21\u5757\uff0c\u751f\u6210 `go.mod` \u6587\u4ef6           | `go mod init mymodule`            |\\n| `go mod vendor` | \u5c06\u6240\u6709\u4f9d\u8d56\u5305\u590d\u5236\u5230 `vendor` \u76ee\u5f55              | `go mod vendor`                   |\\n| `go run`        | \u7f16\u8bd1\u5e76\u6267\u884c\u6307\u5b9a\u7684 Go \u6587\u4ef6\uff0c\u5feb\u901f\u8fd0\u884c\u811a\u672c              | `go run main.go`                  |\\n| `go version`    | \u67e5\u770b Go \u7248\u672c\u4fe1\u606f                         | `go version`                      |\\n\\n### `go install` \u547d\u4ee4\\n\\n*   **\u529f\u80fd**\uff1a\u7f16\u8bd1\u6307\u5b9a\u7684 Go \u6587\u4ef6\u5e76\u5c06\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5b89\u88c5\u5230 `$GOBIN` \u76ee\u5f55\u3002\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e `$GOBIN`\uff0c\u9ed8\u8ba4\u4f1a\u5b89\u88c5\u5230 `$GOPATH/bin`\u3002\\n*   **\u9002\u7528\u573a\u666f**\uff1a\u901a\u5e38\u7528\u4e8e\u5b89\u88c5\u5e76\u8fd0\u884c\u5355\u4e2a Go \u7a0b\u5e8f\uff0c\u6216\u8005\u5c06\u5f00\u53d1\u7684\u5de5\u5177\u5b89\u88c5\u5230\u5168\u5c40\u8def\u5f84\u4ee5\u4fbf\u5728**\u7ec8\u7aef\u4e2d\u76f4\u63a5\u8c03\u7528**\u3002\\n*   **\u4f7f\u7528\u6548\u679c**\uff1a\\n\\n    ![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/64cfc679f41c46bb8742f247a79b8bfb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5ZCM6ZiZ:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTc4NTY5MzEzNTMyNTM1In0%3D&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1733748885&x-orig-sign=0gU0hJCZ1SfQVWlXab%2FHAMc4wVQ%3D)\\n\\n#### \u793a\u4f8b 1\uff1a\u5b89\u88c5\u672c\u5730\u5305\\n\\n\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u672c\u5730\u7684 Go \u7a0b\u5e8f\uff0c\u5305\u542b\u4e00\u4e2a `main.go` \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 `go install` \u5c06\u5b83\u7f16\u8bd1\u5e76\u5b89\u88c5\u5230 `$GOBIN` \u6216 `$GOPATH/bin` \u76ee\u5f55\u4e0b\u3002\\n\\n    go install ./myapp\\n\\n*   \u8be5\u547d\u4ee4\u4f1a\u7f16\u8bd1 `myapp` \u5305\uff0c\u5e76\u5c06\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u653e\u5230 `$GOBIN` \u6216 `$GOPATH/bin` \u76ee\u5f55\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u76f4\u63a5\u8fd0\u884c\u8be5\u53ef\u6267\u884c\u6587\u4ef6\u3002\\n\\n#### \u793a\u4f8b 2\uff1a\u5b89\u88c5\u8fdc\u7a0b\u5305\\n\\n\u5982\u679c\u4f60\u60f3\u5b89\u88c5\u4e00\u4e2a\u8fdc\u7a0b\u7684 Go \u5305\uff08\u4f8b\u5982\uff0cGitHub \u4e0a\u7684 Go \u5de5\u5177\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528 `go install` \u547d\u4ee4\u6307\u5b9a\u8be5\u5305\u7684\u8fdc\u7a0b\u8def\u5f84\u3002\\n\\n    go install github.com/hhatto/gocloc/cmd/gocloc@latest\\n\\n*   \u8fd9\u4e2a\u547d\u4ee4\u4f1a\u4ece `github.com/hhatto/gocloc/cmd/gocloc@latest` \u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684 Go \u8bed\u8a00\u4ee3\u7801\u7edf\u8ba1\u4f97\u5267`gocloc`\uff0c\u7136\u540e\u5c06\u5176\u5b89\u88c5\u5230 `$GOBIN` \u6216 `$GOPATH/bin` \u76ee\u5f55\u4e2d\u3002\\n\\n#### \u6ce8\u610f\u4e8b\u9879\\n\\n**Go 1.17 \u53ca\u66f4\u9ad8\u7248\u672c**\uff1a\u4ece Go 1.17 \u5f00\u59cb\uff0c`go install` \u9700\u8981\u6307\u5b9a\u5305\u7684\u7248\u672c\uff08\u4f8b\u5982 `@latest` \u6216 `@vX.X.X`\uff09\u3002\u5728 Go 1.16 \u4e4b\u524d\uff0c`go install` \u9ed8\u8ba4\u4f1a\u5b89\u88c5\u5f53\u524d\u7248\u672c\u3002\\n\\n\u662f\u7684\uff0c**`go get`** \u548c **`go install`** \u786e\u5b9e\u6709\u5f88\u591a\u91cd\u53e0\u7684\u529f\u80fd\uff0c\u7279\u522b\u662f\u5728 Go 1.17 \u53ca\u4ee5\u540e\u7248\u672c\u3002\u5c3d\u7ba1\u5b83\u4eec\u7684\u6838\u5fc3\u7528\u9014\u7565\u6709\u4e0d\u540c\uff0c\u4f46\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c**`go install`** \u5df2\u7ecf\u53ef\u4ee5\u66ff\u4ee3 **`go get`** \u6765\u5b8c\u6210\u5f88\u591a\u5b89\u88c5\u4efb\u52a1\uff0c\u5c24\u5176\u662f\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6\u65b9\u9762\u3002\\n\\n### `go get` \u547d\u4ee4\\n\\n**\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u6211\u4e0d\u592a\u7528**\\n\\n*   **`go get`** \u548c **`go install`** \u5728 Go 1.17 \u4ee5\u540e\u6709\u4e00\u5b9a\u7684\u91cd\u53e0\uff0c\u5c24\u5176\u5728\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6\u65b9\u9762\u3002\\n*   \u4f46 **`go install`** \u66f4\u52a0\u4e13\u6ce8\u4e8e\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6\uff08\u5c24\u5176\u662f\u5b89\u88c5\u5de5\u5177\uff09\u3002\\n*   \u5982\u679c\u4f60\u53ea\u9700\u8981\u5b89\u88c5\u6216\u66f4\u65b0\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e94\u8be5\u4f18\u5148\u4f7f\u7528 **`go install`**\u3002\\n*   **`go get`** \u66f4\u52a0\u9002\u7528\u4e8e\u7ba1\u7406\u4f9d\u8d56\u548c\u66f4\u65b0 `go.mod` \u6587\u4ef6\u3002\\n\\n| \u547d\u4ee4               | \u529f\u80fd\u63cf\u8ff0                          | \u9002\u7528\u573a\u666f                           | \u91cd\u8981\u533a\u522b                                       |\\n| ---------------- | ----------------------------- | ------------------------------ | ------------------------------------------ |\\n| **`go get`**     | \u83b7\u53d6\u5e76\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u66f4\u65b0 `go.mod` \u6587\u4ef6\uff0c\u4e0b\u8f7d\u6a21\u5757\u3002 | \u83b7\u53d6\u8fdc\u7a0b\u6a21\u5757\u4f9d\u8d56\uff0c\u66f4\u65b0\u9879\u76ee\u7684\u6a21\u5757\u914d\u7f6e\u3002            | **\u4e0d\u63a8\u8350\u7528\u4e8e\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6**\uff0c\u4e3b\u8981\u7528\u4e8e\u4f9d\u8d56\u7ba1\u7406\u3002                 |\\n| **`go install`** | \u7f16\u8bd1\u5e76\u5b89\u88c5\u6307\u5b9a\u7684 Go \u53ef\u6267\u884c\u6587\u4ef6\uff08\u4e3b\u7a0b\u5e8f\u5305\uff09\u3002      | \u5b89\u88c5\u5e76\u7f16\u8bd1\u5355\u4e2a Go \u7a0b\u5e8f/\u5de5\u5177\uff0c\u5b89\u88c5\u5230 `$GOBIN`\u3002 | **\u63a8\u8350\u7528\u4e8e\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6**\uff0c\u4ece Go 1.17 \u5f00\u59cb\uff0c\u5b89\u88c5\u53ef\u6267\u884c\u6587\u4ef6\u7684\u9996\u9009\u65b9\u6cd5\u3002 |\\n\\n### `go mod tidy` \u547d\u4ee4\\n\\n**\u4e00\u53e5\u8bdd\u603b\u7ed3**\uff1a**\u4ee3\u7801\u8dd1\u4e0d\u8d77\u6765\uff0c\u5148\u6765\u4e00\u904d `go mod tidy`**\u3002\\n\\n#### \u529f\u80fd\uff1a\\n\\n`go mod tidy` \u547d\u4ee4\u7528\u4e8e\u6e05\u7406\u548c\u6574\u7406 Go \u6a21\u5757\u7684\u4f9d\u8d56\uff0c\u786e\u4fdd `go.mod` \u548c `go.sum` \u6587\u4ef6\u53ea\u5305\u542b\u9879\u76ee\u5b9e\u9645\u9700\u8981\u7684\u4f9d\u8d56\u9879\uff0c\u5e76\u79fb\u9664\u90a3\u4e9b\u672a\u4f7f\u7528\u7684\u4f9d\u8d56\u3002\u5b83\u4f1a\u81ea\u52a8\u4fee\u590d `go.mod` \u6587\u4ef6\uff0c\u66f4\u65b0 `go.sum`\uff0c\u5e76\u79fb\u9664\u4e0d\u518d\u9700\u8981\u7684\u6a21\u5757\u3002\\n\\n#### \u5de5\u4f5c\u539f\u7406\uff1a\\n\\n*   **\u79fb\u9664\u672a\u4f7f\u7528\u7684\u6a21\u5757**\uff1a\u81ea\u52a8\u5220\u9664 `go.mod` \u4e2d\u58f0\u660e\uff0c\u4f46\u4ee3\u7801\u4e2d\u672a\u5b9e\u9645\u4f7f\u7528\u7684\u6a21\u5757\u3002\\n*   **\u6dfb\u52a0\u7f3a\u5931\u7684\u6a21\u5757**\uff1a\u5982\u679c `go.mod` \u6587\u4ef6\u4e2d\u7f3a\u5c11\u67d0\u4e9b\u5b9e\u9645\u4f7f\u7528\u7684\u6a21\u5757\uff0c`go mod tidy` \u4f1a\u81ea\u52a8\u6dfb\u52a0\u8fd9\u4e9b\u6a21\u5757\u3002\\n*   **\u540c\u6b65 `go.sum`**\uff1a\u786e\u4fdd `go.sum` \u4e2d\u53ea\u6709\u5f53\u524d `go.mod` \u6587\u4ef6\u6240\u9700\u8981\u7684\u4f9d\u8d56\u7684\u54c8\u5e0c\u503c\uff0c\u53bb\u9664\u8fc7\u671f\u7684\u54c8\u5e0c\u3002\\n\\n#### \u89e3\u51b3\u5e38\u89c1\u95ee\u9898\uff1a\\n\\n*   **\u65e0\u6cd5\u627e\u5230\u4f9d\u8d56**\uff1a\u5982\u679c\u4f60\u9047\u5230\u9519\u8bef\u63d0\u793a\u67d0\u4e9b\u4f9d\u8d56\u7f3a\u5931\uff0c\u6267\u884c `go mod tidy` \u540e\u4f1a\u81ea\u52a8\u4fee\u590d\u3002\\n*   **\u6a21\u5757\u7248\u672c\u51b2\u7a81**\uff1a\u6709\u65f6\u4f9d\u8d56\u7248\u672c\u51b2\u7a81\u6216\u8005\u91cd\u590d\u58f0\u660e\uff0c\u6267\u884c `go mod tidy` \u53ef\u4ee5\u5e2e\u52a9\u6e05\u7406\u8fd9\u4e9b\u95ee\u9898\u3002\\n\\n### `go run .` \u547d\u4ee4\\n\\n**\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u628a\u4f60\u5199\u7684 Go \u4ee3\u7801\u8dd1\u8d77\u6765\u3002**\\n\\n#### \u4f7f\u7528\u65b9\u6cd5\uff1a\\n\\n1.  **\u79fb\u52a8\u5230\u9879\u76ee\u5165\u53e3\u6587\u4ef6\u6240\u5728\u76ee\u5f55**\uff0c\u7136\u540e\u5728\u7ec8\u7aef\u8fd0\u884c\uff1a\\n\\n        go run .\\n\\n    \u5176\u4e2d\uff0c`\\".\\"` \u4ee3\u8868\u5f53\u524d\u76ee\u5f55\uff0cGo \u4f1a\u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709 `.go` \u6587\u4ef6\u7f16\u8bd1\u5e76\u6267\u884c\u3002\u5982\u679c\u4f60\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u6216\u591a\u4e2a\u6587\u4ef6\u90fd\u5305\u542b `main` \u51fd\u6570\uff0c\u5b83\u4eec\u90fd\u4f1a\u88ab\u4e00\u8d77\u6267\u884c\u3002\\n\\n2.  **\u6307\u5b9a\u6587\u4ef6\u8fd0\u884c**\uff1a \u5982\u679c\u4f60\u53ea\u60f3\u8fd0\u884c\u7279\u5b9a\u7684 Go \u6587\u4ef6\uff0c\u53ef\u4ee5\u6307\u5b9a\u6587\u4ef6\u540d\uff1a\\n\\n        go run main.go\\n\\n    \u8fd9\u5c06\u53ea\u7f16\u8bd1\u5e76\u6267\u884c `main.go` \u6587\u4ef6\u3002\\n\\n#### \u4e3a\u4ec0\u4e48\u4f7f\u7528 `go run .`\uff1a\\n\\n*   **\u591a\u4e2a `main` \u5305**\uff1a\u5728\u4e00\u4e9b\u8f83\u5927\u7684\u9879\u76ee\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u6709\u591a\u4e2a\u5305\u542b `main` \u51fd\u6570\u7684\u5305\uff0c\u6216\u8005\u591a\u4e2a\u5165\u53e3\u6587\u4ef6\u3002\u901a\u8fc7 `go run .`\uff0cGo \u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u8fd0\u884c\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709 `.go` \u6587\u4ef6\uff0c\u907f\u514d\u4f60\u5fd8\u8bb0\u8fd0\u884c\u67d0\u4e2a\u5165\u53e3\u6587\u4ef6\u3002\\n*   **\u4fbf\u4e8e\u8c03\u8bd5**\uff1a\u4f7f\u7528 `go run .` \u53ef\u4ee5\u5feb\u901f\u8fd0\u884c\u6574\u4e2a\u9879\u76ee\u800c\u4e0d\u9700\u8981\u624b\u52a8\u6307\u5b9a\u6bcf\u4e2a\u6587\u4ef6\uff0c\u9002\u5408\u5feb\u901f\u5f00\u53d1\u548c\u8c03\u8bd5\u3002\\n\\n### go build \u547d\u4ee4\\n\\n**\u4e00\u53e5\u8bdd\u603b\u7ed3\uff1a\u7f16\u8bd1\u4f60\u7684 Go \u7a0b\u5e8f\uff0c\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u3002**\\n\\n\u65b0\u624b\u4e0d\u592a\u7528\uff0c\u7559\u7740\u4ee5\u540e\u518d\u8bf4\u3002"},{"id":"/2024/Hello World","metadata":{"permalink":"/blog/2024/Hello World","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024/Hello World.md","source":"@site/blog/2024/Hello World.md","title":"Hello World","description":"\u6211\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2\uff0c\u8ba9\u4f60\u62e5\u6709\u4e00\u6837\u7684\u535a\u5ba2","date":"2024-12-02T13:00:27.000Z","tags":[{"inline":false,"label":"\u4e2a\u4eba","permalink":"/blog/tags/\u4e2a\u4eba","description":"\u4e2a\u4eba\u76f8\u5173\u7684\u6587\u7ae0"}],"readingTime":0.025,"hasTruncateMarker":false,"authors":[{"name":"\u540c\u9619","title":"Just for gopher","url":"https://github.com/tongque0","page":{"permalink":"/blog/authors/tongque-0"},"socials":{"github":"https://github.com/tongque0","juejin":"https://juejin.cn/user/178569313532535"},"imageURL":"https://github.com/tongque0.png","key":"tongque0"}],"frontMatter":{"title":"Hello World","authors":["tongque0"],"tags":["\u4e2a\u4eba"],"description":"\u6211\u7684\u7b2c\u4e00\u7bc7\u535a\u5ba2\uff0c\u8ba9\u4f60\u62e5\u6709\u4e00\u6837\u7684\u535a\u5ba2"},"unlisted":false,"prevItem":{"title":"Go start","permalink":"/blog/2024/Go\u5b89\u88c5"}},"content":":::tip\\n\u4f60\u597d\uff0c\u4e16\u754c\uff01\\n:::"}]}}')}}]);