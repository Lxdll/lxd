import cx from "classnames";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioShell } from "@/components/portfolio-shell";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

const backLinkClassName =
  "inline-flex font-mono text-sm text-[#7a7a73] transition hover:text-[#b6f36b]";

const blogContentClassName = cx(
  "mt-12 text-[1.05rem] leading-[1.9] text-[#cfcfc6]",
  "[&>*+*]:mt-[1.35rem]",
  "[&_h1]:font-bold [&_h1]:tracking-normal [&_h1]:text-[#f5f5f0]",
  "[&_h2]:mt-12 [&_h2]:text-[1.7rem] [&_h2]:font-bold [&_h2]:leading-[1.3] [&_h2]:tracking-normal [&_h2]:text-[#f5f5f0]",
  "[&_h3]:mt-9 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:leading-[1.4] [&_h3]:tracking-normal [&_h3]:text-[#f5f5f0]",
  "[&_h4]:font-bold [&_h4]:tracking-normal [&_h4]:text-[#f5f5f0]",
  "[&_h2_a]:text-inherit [&_h3_a]:text-inherit",
  "[&_p]:text-[#c4c4bb] [&_li]:text-[#c4c4bb]",
  "[&_a]:text-[#b6f36b] [&_a]:underline [&_a]:decoration-[#b6f36b]/35 [&_a]:underline-offset-[0.2em]",
  "[&_ul]:list-disc [&_ul]:pl-[1.4rem] [&_ol]:list-decimal [&_ol]:pl-[1.4rem]",
  "[&_li+li]:mt-[0.4rem]",
  "[&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#b6f36b] [&_blockquote]:pl-5 [&_blockquote]:text-[#9a9a92]",
  "[&_blockquote_p]:text-[#9a9a92]",
  "[&_hr]:my-12 [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-[#202023]",
  "[&_code]:rounded-[5px] [&_code]:bg-[#121214] [&_code]:px-[0.32rem] [&_code]:py-[0.12rem] [&_code]:font-mono [&_code]:text-[0.88em] [&_code]:text-[#ededdf]",
  "[&_pre]:my-8 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-[#202023] [&_pre]:bg-[#0b0b0c] [&_pre]:px-[1.35rem] [&_pre]:py-5 [&_pre]:leading-7",
  "[&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0",
  "[&_table]:block [&_table]:w-full [&_table]:border-collapse [&_table]:overflow-x-auto",
  "[&_th]:border-b [&_th]:border-[#202023] [&_th]:py-3 [&_th]:pr-4 [&_th]:text-left [&_th]:font-bold [&_th]:text-[#f5f5f0]",
  "[&_td]:border-b [&_td]:border-[#202023] [&_td]:py-3 [&_td]:pr-4 [&_td]:text-left",
);

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug.join("/"));

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | LXD Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug.join("/"));

  if (!post) {
    notFound();
  }

  return (
    <PortfolioShell active="blog">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="border-b border-[#202023] pb-12">
          <Link
            href="/blog"
            className={backLinkClassName}
          >
            cd ../blog
          </Link>
          <h1 className="mt-10 text-5xl font-bold leading-[1.04] tracking-normal text-[#f5f5f0] sm:text-6xl xl:text-[72px]">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-[#7a7a73]">
            {post.date ? <time dateTime={post.date}>{post.date}</time> : null}
            {post.date ? <span>·</span> : null}
            <Link
              href={`/blog/category/${post.category}`}
              className="transition hover:text-[#b6f36b]"
            >
              {post.categoryLabel}
            </Link>
            {post.tags.length > 0 ? <span>·</span> : null}
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>

          {post.description ? (
            <p className="mt-8 text-xl leading-9 text-[#9a9a92]">
              {post.description}
            </p>
          ) : null}
        </header>

        <div
          className={blogContentClassName}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <footer className="mt-16 border-t border-[#202023] pt-8">
          <Link
            href="/blog"
            className={backLinkClassName}
          >
            &lt;- Back to all posts
          </Link>
        </footer>
      </article>
    </PortfolioShell>
  );
}
