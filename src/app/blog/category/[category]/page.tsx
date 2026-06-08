import cx from "classnames";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow, Panel, PortfolioShell } from "@/components/portfolio-shell";
import {
  BLOG_CATEGORIES,
  type BlogCategoryKey,
  getBlogPostsByCategory,
} from "@/lib/blog";

type BlogCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

function getCategory(categoryKey: string) {
  return BLOG_CATEGORIES.find((category) => category.key === categoryKey);
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    category: category.key,
  }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps) {
  const { category: categoryKey } = await params;
  const category = getCategory(categoryKey);

  if (!category) {
    return {};
  }

  return {
    title: `${category.label} | LXD Blog`,
    description: `${category.label} 分类下的博客文章。`,
  };
}

export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { category: categoryKey } = await params;
  const category = getCategory(categoryKey);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(category.key as BlogCategoryKey);

  return (
    <PortfolioShell active="blog">
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <Link
            href="/blog"
            className="inline-flex font-mono text-sm text-[#7a7a73] transition hover:text-[#b6f36b]"
          >
            cd ../blog
          </Link>
          <div className="mt-10">
            <Eyebrow>Blog Category</Eyebrow>
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.02] tracking-normal text-[#f5f5f0] sm:text-6xl xl:text-[72px]">
            {category.label}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9a9a92]">
            这里收集 {category.label} 分类下的文章、笔记和问题记录。
          </p>

          <nav
            aria-label="Blog categories"
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/blog"
              className="rounded-full border border-[#202023] px-4 py-2 font-mono text-xs text-[#7a7a73] transition hover:border-[#b6f36b] hover:text-[#b6f36b]"
            >
              All
            </Link>
            {BLOG_CATEGORIES.map((item) => {
              const isActive = item.key === category.key;

              return (
                <Link
                  key={item.key}
                  href={`/blog/category/${item.key}`}
                  className={cx(
                    "rounded-full border px-4 py-2 font-mono text-xs transition",
                    isActive
                      ? "border-[#b6f36b] text-[#b6f36b]"
                      : "border-[#202023] text-[#7a7a73] hover:border-[#b6f36b] hover:text-[#b6f36b]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <div className="mt-16 border-t border-[#202023]">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-5 border-b border-[#202023] py-8 transition sm:grid-cols-[4rem_1fr_auto]"
              >
                <p className="font-mono text-sm text-[#5f5f5a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2
                    className={cx(
                      "text-2xl font-semibold leading-tight text-[#f5f5f0]",
                      "transition group-hover:text-[#b6f36b]",
                    )}
                  >
                    {post.title}
                  </h2>
                  {post.description ? (
                    <p className="mt-3 max-w-2xl text-base leading-7 text-[#9a9a92]">
                      {post.description}
                    </p>
                  ) : null}
                  <p className="mt-4 font-mono text-xs text-[#5f5f5a]">
                    {[post.date, ...post.tags].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <span
                  className={cx(
                    "self-start font-mono text-sm text-[#5f5f5a]",
                    "transition group-hover:translate-x-1 group-hover:text-[#b6f36b]",
                  )}
                >
                  -&gt;
                </span>
              </Link>
            ))
          ) : (
            <Panel className="mt-8 p-7">
              <h2 className="text-2xl font-semibold text-[#f5f5f0]">
                这个分类还没有博客
              </h2>
              <p className="mt-3 text-base leading-7 text-[#9a9a92]">
                在 content/blog/{category.key} 下新增 Markdown 文件后，这里会自动显示。
              </p>
            </Panel>
          )}
        </div>
      </section>
    </PortfolioShell>
  );
}
