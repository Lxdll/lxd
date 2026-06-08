import cx from "classnames";
import Link from "next/link";
import { Eyebrow, Panel, PortfolioShell } from "@/components/portfolio-shell";
import { BLOG_CATEGORIES, getBlogPostsGroupedByCategory } from "@/lib/blog";

export default function BlogPage() {
  const groupedPosts = getBlogPostsGroupedByCategory();
  const postCount = groupedPosts.reduce(
    (count, category) => count + category.posts.length,
    0,
  );

  return (
    <PortfolioShell active="blog">
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-8 max-w-3xl text-5xl font-bold leading-[1.02] tracking-normal text-[#f5f5f0] sm:text-6xl xl:text-[72px]">
            Notes from building,
            <br />
            learning, and debugging.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#9a9a92]">
            这里放博客导语。文章来自项目里的 Markdown 文件，并通过
            front matter 管理标题、日期、摘要、分类和标签。
          </p>

          <nav
            aria-label="Blog categories"
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/blog"
              className="rounded-full border border-[#b6f36b] px-4 py-2 font-mono text-xs text-[#b6f36b]"
            >
              All
            </Link>
            {BLOG_CATEGORIES.map((category) => (
              <Link
                key={category.key}
                href={`/blog/category/${category.key}`}
                className="rounded-full border border-[#202023] px-4 py-2 font-mono text-xs text-[#7a7a73] transition hover:border-[#b6f36b] hover:text-[#b6f36b]"
              >
                {category.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="mt-16">
          {postCount > 0 ? (
            groupedPosts.map((category) => (
              <section
                key={category.key}
                className="border-t border-[#202023] py-10 first:pt-0"
              >
                <div className="mb-2 flex items-end justify-between gap-4">
                  <h2 className="text-3xl font-semibold tracking-normal text-[#f5f5f0]">
                    {category.label}
                  </h2>
                  <Link
                    href={`/blog/category/${category.key}`}
                    className="font-mono text-xs text-[#5f5f5a] transition hover:text-[#b6f36b]"
                  >
                    View category
                  </Link>
                </div>

                <div>
                  {category.posts.map((post, index) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group grid gap-5 border-b border-[#202023] py-8 transition sm:grid-cols-[4rem_1fr_auto]"
                    >
                      <p className="font-mono text-sm text-[#5f5f5a]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3
                          className={cx(
                            "text-2xl font-semibold leading-tight text-[#f5f5f0]",
                            "transition group-hover:text-[#b6f36b]",
                          )}
                        >
                          {post.title}
                        </h3>
                        {post.description ? (
                          <p className="mt-3 max-w-2xl text-base leading-7 text-[#9a9a92]">
                            {post.description}
                          </p>
                        ) : null}
                        <p className="mt-4 font-mono text-xs text-[#5f5f5a]">
                          {[post.date, post.categoryLabel, ...post.tags]
                            .filter(Boolean)
                            .join(" · ")}
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
                  ))}
                </div>
              </section>
            ))
          ) : (
            <Panel className="mt-8 p-7">
              <h2 className="text-2xl font-semibold text-[#f5f5f0]">
                还没有博客
              </h2>
              <p className="mt-3 text-base leading-7 text-[#9a9a92]">
                在 content/blog 的分类目录下新增 Markdown 文件后，这里会自动显示。
              </p>
            </Panel>
          )}
        </div>
      </section>
    </PortfolioShell>
  );
}
