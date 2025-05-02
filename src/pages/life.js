import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

const friends = [
  { name: "张三", url: "https://zhangsan.com" },
  { name: "李四", url: "https://lisi.dev" },
  { name: "王五", url: "https://wangwu.cn" },
];

const photos = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
];

export default function Life() {
  const [statuses, setStatuses] = useState({});

  useEffect(() => {
    friends.forEach(friend => {
      fetch(friend.url, { mode: "no-cors" }) // no-cors 用于避免 CORS 报错
        .then(() => setStatuses(prev => ({ ...prev, [friend.url]: "🟢 在线" })))
        .catch(() => setStatuses(prev => ({ ...prev, [friend.url]: "🔴 离线" })));
    });
  }, []);

  return (
    <Layout title="Projects">

    </Layout>
  );
}
