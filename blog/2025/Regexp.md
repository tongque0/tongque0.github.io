---
title: Regexp
authors: [tongque0]
tags: [个人]
description: 正则表达式
hide_table_of_contents: false
date: 2025-05-31
---

:::tip 前往测试网站
🔗 [**regex101**](https://regex101.com/)
:::

### 使用示例
```go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    re := regexp.MustCompile(`\d+`)
    text := "abc123def456"

    fmt.Println("是否匹配：", re.MatchString(text))
    fmt.Println("第一个匹配：", re.FindString(text))
    fmt.Println("所有匹配：", re.FindAllString(text, -1))

    replaced := re.ReplaceAllString(text, "#")
    fmt.Println("替换结果：", replaced)
}

//输出
// 是否匹配： true
// 第一个匹配： 123
// 所有匹配： [123 456]
// 替换结果： abc#def#

```
