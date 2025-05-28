import { useEffect, useState } from "react";
import { PhotoWall } from "../components/life/PhotoWall";
import Head from "@docusaurus/Head";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generateWidthHeight() {
  const baseHeight = randomBetween(200, 500); // 高度 200~280
  const ratio = randomBetween(1.5,0.7);      // 宽高比 0.7~1.5
  const width = baseHeight * ratio;
  return { width: Math.round(width), height: Math.round(baseHeight) };
}

export default function Life() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("https://tongque-blog-image.2863528786.workers.dev/");
        const urls = await res.json();

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
