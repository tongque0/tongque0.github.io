import { PhotoWall } from "../components/life/PhotoWall";
import Head from "@docusaurus/Head";

export default function Life() {
  const myPhotos = [
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // 海滩日落
      caption: "Summer vacation in Bali",
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // 山区徒步
      caption: "Mountain hiking trip",
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63", // 夜晚城市
      caption: "City skyline at night",
      height: 250,
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // 海滩日落
      caption: "Summer vacation in Bali",
      height: 300,
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // 山区徒步
      caption: "Mountain hiking trip",
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63", // 夜晚城市
      caption: "City skyline at night",
      height: 250,
    },
    {
      src: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b", // 海滩日落
      caption: "Beach sunset",
      height: 180,
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // 海滩日落
      caption: "Summer vacation in Bali",
      height: 300,
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // 山区徒步
      caption: "Mountain hiking trip",
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63", // 夜晚城市
      caption: "City skyline at night",
      height: 250,
    },
    {
      src: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b", // 海滩日落
      caption: "Beach sunset",
      height: 180,
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // 海滩日落
      caption: "Summer vacation in Bali",
      height: 300,
      featured: true,
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // 山区徒步
      caption: "Mountain hiking trip",
      height: 200,
    },
    {
      src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63", // 夜晚城市
      caption: "City skyline at night",
      height: 250,
    },
    {
      src: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b", // 海滩日落
      caption: "Beach sunset",
    },
  ];
  const handleBack = () => {
    window.location.href = "/"; // 直接跳转到首页
  };
  return (
    <main>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="container padding-vert">
        <PhotoWall photos={myPhotos} title="Go Back" />
      </div>
    </main>
  );
}
