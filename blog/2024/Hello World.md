---
title: Hello World
authors: [tongque0]
tags: [个人]
description: 我的第一篇博客，让你拥有一样的博客
hide_table_of_contents: false
date: 2024-01-01
---

:::tip
你好 世界！
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="go" label="Go">

  ```go
  package main

  import "fmt"

  func main() {
      fmt.Println("Hello, World!")
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ```python
  print("Hello, World!")
  ```

  </TabItem>
  <TabItem value="cpp" label="C++">

  ```cpp
  #include <iostream>
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }
  ```

  </TabItem>
  <TabItem value="javascript" label="JavaScript">

  ```javascript
  console.log("Hello, World!");
  ```

  </TabItem>
  <TabItem value="rust" label="Rust">

  ```rust
  fn main() {
      println!("Hello, World!");
  }
  ```

  </TabItem>
  <TabItem value="bash" label="Bash">

  ```bash
  echo "Hello, World!"
  ```

  </TabItem>
</Tabs>
