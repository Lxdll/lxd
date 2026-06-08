import { skills } from "@/components/portfolio-data";
import {
  BodyCopy,
  DisplayTitle,
  Eyebrow,
  PageColumn,
  PageGrid,
  Panel,
  PortfolioShell,
} from "@/components/portfolio-shell";

export default function SkillsPage() {
  return (
    <PortfolioShell active="skills">
      <PageGrid>
        <PageColumn className="lg:border-r lg:border-[#202023]">
          <Eyebrow>Skills</Eyebrow>
          <DisplayTitle>
            A practical stack for
            <br />
            shipping software.
          </DisplayTitle>
          <BodyCopy>
            这里预留你的技能说明。可以按语言、框架、数据库、云服务、
            AI 工具链或工程方法来组织。
          </BodyCopy>

          <div className="mt-16 flex max-w-xl flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-[#2b2b2e] bg-[#101012] px-4 py-2 text-sm font-medium text-[#f5f5f0]"
              >
                {skill}
              </span>
            ))}
          </div>
        </PageColumn>

        <PageColumn className="gap-12">
          <Panel className="p-7">
            <div className="flex gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#b6f36b]" />
            </div>
            <pre className="mt-10 overflow-x-auto font-mono text-base leading-8 text-[#f5f5f0]">
              {`> const profile = {
    role: "software developer",
    focus: ["web", "systems", "ai"],
    taste: "minimal, reliable, fast"
  }`}
            </pre>
          </Panel>

          <Panel className="p-7">
            <h2 className="text-2xl font-semibold text-[#f5f5f0]">
              Engineering Principles
            </h2>
            <p className="mt-2 text-sm font-medium text-[#b6f36b]">
              maintainable / observable / fast
            </p>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#9a9a92]">
              预留你的工程习惯：代码质量、性能优化、测试、文档与协作。
            </p>
            <div className="mt-8 h-px bg-[#2b2b2e]" />
            <a
              href="/work"
              className="mt-5 inline-flex text-sm font-semibold text-[#f5f5f0]"
            >
              View repository -&gt;
            </a>
          </Panel>
        </PageColumn>
      </PageGrid>
    </PortfolioShell>
  );
}
