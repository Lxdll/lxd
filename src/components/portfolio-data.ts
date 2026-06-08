export type NavKey = "about" | "skills" | "blog" | "work" | "contact";

export const navItems: Array<{ key: NavKey; label: string; href: string }> = [
  { key: "about", label: "About", href: "/" },
  { key: "skills", label: "Skills", href: "/skills" },
  { key: "blog", label: "Blog", href: "/blog" },
  { key: "work", label: "Work", href: "/work" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "Databases",
  "Cloud",
  "AI APIs",
  "Testing",
  "UI Systems",
];

export const blogPosts = [
  {
    number: "01",
    title: "Designing a quieter developer portfolio",
    meta: "UI / personal site / minimalism",
  },
  {
    number: "02",
    title: "How I structure a side project from day one",
    meta: "architecture / workflow / notes",
  },
  {
    number: "03",
    title: "Useful patterns I keep coming back to",
    meta: "typescript / backend / ai tools",
  },
];

export const projects = [
  {
    name: "Project Placeholder 01",
    meta: "web app / typescript / product",
    description: "项目简介占位。描述你解决的问题、负责的部分，以及最终产出。",
  },
  {
    name: "Project Placeholder 02",
    meta: "backend / infra / automation",
    description: "项目简介占位。可以加入架构亮点、性能指标或工程经验。",
  },
];
