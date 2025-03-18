import React from "react";
import Layout from "@theme/Layout";

const projects = [
  {
    title: "EduPal",
    description: "一个面向小学生和初中生的 AI 学习网站。",
    link: "https://github.com/tongque0/edupal",
  },
  {
    title: "GoMod Replace Tool",
    description: "一个用于查找和替换 `go.mod` 模块名的工具。",
    link: "https://github.com/tongque0/gomod-tool",
  },
  {
    title: "Casbin 权限控制",
    description: "基于 Casbin 实现的权限控制方案。",
    link: "https://github.com/casbin/casbin",
  },
];

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="container margin-vert--lg">
        <h1>我的项目</h1>
        <p>这里是我正在开发或维护的一些项目。</p>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
