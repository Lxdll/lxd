import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const BLOG_CATEGORIES = [
  { key: "react", label: "React" },
  { key: "javascript", label: "JavaScript" },
  { key: "docker", label: "Docker" },
  { key: "redis", label: "Redis" },
  { key: "others", label: "其他" },
] as const;

export type BlogCategoryKey = (typeof BLOG_CATEGORIES)[number]["key"];

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategoryKey;
  categoryLabel: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

type FrontMatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  category?: unknown;
  tags?: unknown;
};

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

function normalizePathname(value: string) {
  return value.split(path.sep).join("/");
}

function toSlug(filename: string) {
  return normalizePathname(filename).replace(/\.mdx?$/, "");
}

function toDateString(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return typeof value === "string" ? value : "";
}

function toTags(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((tag): tag is string => typeof tag === "string");
}

function isBlogCategoryKey(value: unknown): value is BlogCategoryKey {
  return BLOG_CATEGORIES.some((category) => category.key === value);
}

function getCategoryLabel(categoryKey: BlogCategoryKey) {
  return (
    BLOG_CATEGORIES.find((category) => category.key === categoryKey)?.label ??
    categoryKey
  );
}

function getCategoryFromFilename(filename: string) {
  const [category] = normalizePathname(filename).split("/");

  return isBlogCategoryKey(category) ? category : "others";
}

function getPostMeta(filename: string): BlogPostMeta {
  const slug = toSlug(filename);
  const filePath = path.join(BLOG_DIR, filename);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);
  const frontMatter = data as FrontMatter;
  const category = isBlogCategoryKey(frontMatter.category)
    ? frontMatter.category
    : getCategoryFromFilename(filename);

  return {
    slug,
    title: typeof frontMatter.title === "string" ? frontMatter.title : slug,
    description:
      typeof frontMatter.description === "string" ? frontMatter.description : "",
    date: toDateString(frontMatter.date),
    category,
    categoryLabel: getCategoryLabel(category),
    tags: toTags(frontMatter.tags),
  };
}

function getPostFilenamesInDir(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getPostFilenamesInDir(entryPath);
    }

    if (!/\.mdx?$/.test(entry.name)) {
      return [];
    }

    return normalizePathname(path.relative(BLOG_DIR, entryPath));
  });
}

function getPostFilenames() {
  ensureBlogDir();

  return getPostFilenamesInDir(BLOG_DIR);
}

export function getAllBlogPosts() {
  return getPostFilenames()
    .map(getPostMeta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostsByCategory(category: BlogCategoryKey) {
  return getAllBlogPosts().filter((post) => post.category === category);
}

export function getBlogPostsGroupedByCategory() {
  const posts = getAllBlogPosts();

  return BLOG_CATEGORIES.map((category) => ({
    ...category,
    posts: posts.filter((post) => post.category === category.key),
  })).filter((category) => category.posts.length > 0);
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filename = getPostFilenames().find((postFilename) => {
    return toSlug(postFilename) === slug;
  });

  if (!filename) {
    return null;
  }

  const filePath = path.join(BLOG_DIR, filename);
  const file = fs.readFileSync(filePath, "utf8");
  const { content } = matter(file);
  const processedContent = await remark().use(html).process(content);

  return {
    ...getPostMeta(filename),
    contentHtml: processedContent.toString(),
  };
}
