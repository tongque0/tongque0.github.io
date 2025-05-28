---
title: Gorm
authors: [tongque0]
tags: [Go]
description: gorm知识入门
hide_table_of_contents: false
date: 2025-05-12
---

:::tip 前往官网
🔗 [**Gorm 中文文档**](https://gorm.io/zh_CN/docs/)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### 创建数据库连接

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
````

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

  <TabItem value="dockerfile" label="docker-compose.yml">

```yaml
# 使用 docker-compose 搭建数据库环境
services:
  mysql:
    image: mysql # 使用 MySQL 官方镜像，未指定版本默认为 latest（建议明确版本号，如 mysql:8.0）
    environment:
      MYSQL_ROOT_PASSWORD: root       # root 用户密码
      MYSQL_DATABASE: testdb          # 默认创建的数据库
      MYSQL_USER: testuser            # 新建的用户
      MYSQL_PASSWORD: testpass        # 新建用户的密码
    ports:
      - "3306:3306"                   # 映射主机端口 3306 到容器端口 3306

  postgres:
    image: postgres # 使用 PostgreSQL 官方镜像，未指定版本默认为 latest（建议明确版本号，如 postgres:15）
    environment:
      POSTGRES_USER: testuser         # 新建的用户
      POSTGRES_PASSWORD: testpass     # 用户密码
      POSTGRES_DB: testdb             # 默认创建的数据库
    ports:
      - "5432:5432"                   # 映射主机端口 5432 到容器端口 5432
```

  </TabItem>
</Tabs>

### CRUD

<Tabs>
    <TabItem value="Practice" label="Practice">

    ```go
    package main

    import (
        "gorm.io/driver/postgres"
        "gorm.io/gorm"
    )

    type User struct {
        gorm.Model
        Name string `gorm:"default:1"`
    }

    func main() {
        dsn := "host=localhost user=testuser password=testpass dbname=testdb port=5432 sslmode=disable TimeZone=Asia/Shanghai"
        db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
        db = db.Debug()
        if err != nil {
            panic("failed to connect database")
        }
        //重置练习表
        err = db.Migrator().DropTable(&User{})
        if err != nil {
            panic("failed to drop table")
        }
        err = db.AutoMigrate(&User{})
        if err != nil {
            panic("failed to migrate")
        }
        users := []User{
            {Name: "张三"},
            {Name: "李四"},
            {Name: "王五"},
        }
        result := db.Create(&users)
        if result.Error != nil {
            panic("failed to create test data")
        }

        //TODO:

    }

    ```
    </TabItem>
</Tabs>

