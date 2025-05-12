---
title: Gorm
authors: [tongque0]
tags: [Go]
description: gorm知识入门
hide_table_of_contents: false
date: 2025-05-12
---

:::tip 前往官网
🔗 [**Gorm中文文档**](https://gorm.io/zh_CN/docs/)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 连接

<Tabs>
  <TabItem value="mysql" label="mysql">

```go
import (
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  // 参考 https://github.com/go-sql-driver/mysql#dsn-data-source-name 获取详情
  dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
  db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
  if err != nil {
    panic("failed to connect database")
  }
  // 使用 db 对象执行数据库操作
}
```

  </TabItem>

  <TabItem value="postgres" label="postgres">

```go
import (
  "gorm.io/driver/postgres"
  "gorm.io/gorm"
)

func main() {
  dsn := "host=localhost user=gorm password=gorm dbname=gorm port=9920 sslmode=disable TimeZone=Asia/Shanghai"
  db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
  if err != nil {
    panic("failed to connect database")
  }
  // 使用 db 对象执行数据库操作
}
```

  </TabItem>

  <TabItem value="sqlite" label="sqlite">

```go
import (
  "gorm.io/driver/sqlite" // 基于 CGO 的 SQLite 驱动
  // "github.com/glebarez/sqlite" // 纯 Go 实现的 SQLite 驱动，详情见：https://github.com/glebarez/sqlite
  "gorm.io/gorm"
)

func main() {
  db, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{})
  if err != nil {
    panic("failed to connect database")
  }
  // 使用 db 对象执行数据库操作
}
```

  </TabItem>
</Tabs>
