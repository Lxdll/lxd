import { BadgeCard } from "@/components/badge-card";
import {
  BodyCopy,
  DisplayTitle,
  Eyebrow,
  PageColumn,
  PageGrid,
  PortfolioShell,
} from "@/components/portfolio-shell";

export default function Home() {
  return (
    <PortfolioShell active="about">
      <PageGrid>
        <PageColumn className="lg:border-r lg:border-[#202023]">
          <BadgeCard />
        </PageColumn>

        <PageColumn>
          <Eyebrow>Programmer Portfolio</Eyebrow>
          <DisplayTitle>
            姓名 / Name
            <br />
            Software Developer
          </DisplayTitle>
          <BodyCopy>
            这里预留个人简介内容。可以写你的技术方向、项目经历、开源贡献、
            产品思考，或者一段更有个人气质的自我介绍。整体视觉保持黑底、
            克制，像代码编辑器一样安静。
          </BodyCopy>

          <div className="mt-8 h-px max-w-xl bg-[#2b2b2e]" />

          <dl className="mt-9 grid max-w-xl gap-7 text-sm sm:grid-cols-[120px_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f5f5a]">
              Stack
            </dt>
            <dd className="text-lg font-medium text-[#f5f5f0]">
              Frontend / Backend / AI Tools
            </dd>
            <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f5f5a]">
              Focus
            </dt>
            <dd className="text-lg font-medium text-[#f5f5f0]">
              Building clean, useful software
            </dd>
          </dl>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#f5f5f0] px-8 text-sm font-semibold text-[#050505]"
            >
              View Work
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#2b2b2e] px-8 text-sm font-semibold text-[#f5f5f0]"
            >
              Contact
            </a>
          </div>
        </PageColumn>
      </PageGrid>
    </PortfolioShell>
  );
}
