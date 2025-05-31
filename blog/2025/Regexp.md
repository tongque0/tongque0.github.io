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

## 使用示例

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

// 输出：
// 是否匹配： true
// 第一个匹配： 123
// 所有匹配： [123 456]
// 替换结果： abc#def#
```

---

## 常用方法速查表

| 方法名                | 说明                     |
|-----------------------|--------------------------|
| `MatchString`         | 是否匹配字符串           |
| `FindString`          | 返回第一个匹配的字符串   |
| `FindAllString`       | 返回所有匹配的字符串     |
| `ReplaceAllString`    | 替换所有匹配的内容       |
| `FindStringSubmatch`  | 获取分组匹配             |
| `ReplaceAllStringFunc`| 函数式替换匹配内容       |

---

## 常见正则表达式语法（RE2）

```text
.     任意字符
\d    数字（相当于 [0-9]）
\w    单词字符（字母、数字、下划线）
+     匹配一个或多个
*     匹配零个或多个
?     匹配零个或一个
^     匹配行首
$     匹配行尾
[]    字符集
()    分组
|     或运算
```

多行模式支持用 `(?m)` 写在正则前缀中启用，例如：`(?m)^abc$`

---

## 进阶示例：函数式替换

```go
package main

import (
    "fmt"
    "regexp"
)

func main() {
    re := regexp.MustCompile(`\d+`)
    result := re.ReplaceAllStringFunc("价格: 123 元", func(s string) string {
        return "[" + s + "]"
    })
    fmt.Println(result)
}

// 输出：价格: [123] 元
```
