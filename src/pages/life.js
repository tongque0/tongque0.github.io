import { useEffect, useState } from "react";
import { PhotoWall } from "../components/life/PhotoWall";
import Head from "@docusaurus/Head";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generateWidthHeight() {
  const width = randomBetween(200, 600);  // 宽度 200~800
  const height = randomBetween(200, 800); // 高度 200~600
  return { width: Math.round(width), height: Math.round(height) };
}


export default function Life() {
  const [photos, setPhotos] = useState([]);

useEffect(() => {
  async function fetchPhotos() {
    try {
      const res = await fetch("https://tongque-blog-image.ocybers.com/");
      const urls = await res.json();

      // Fisher-Yates 洗牌算法打乱数组
      for (let i = urls.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [urls[i], urls[j]] = [urls[j], urls[i]];
      }

      const photosData = urls.map((url, index) => {
        const { width, height } = generateWidthHeight();
        return {
          src: url,
          width,
          height,
        };
      });

      setPhotos(photosData);
    } catch (error) {
      console.error("获取图片列表失败", error);
    }
  }
  fetchPhotos();
}, []);


  return (
    <main>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="container padding-vert">
        <PhotoWall photos={photos} title="Go Back" />
      </div>
    </main>
  );
}
