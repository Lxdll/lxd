import { projects } from "@/components/portfolio-data";
import {
  BodyCopy,
  DisplayTitle,
  Eyebrow,
  PageColumn,
  PageGrid,
  Panel,
  PortfolioShell,
} from "@/components/portfolio-shell";

export default function WorkPage() {
  return (
    <PortfolioShell active="work">
      <PageGrid>
        <PageColumn className="lg:border-r lg:border-[#202023]">
          <Eyebrow>Work</Eyebrow>
          <DisplayTitle>
            Selected projects,
            <br />
            kept intentionally spare.
          </DisplayTitle>
          <BodyCopy>
            这里预留项目页内容。建议每个项目写目标、技术栈、结果和链接。
          </BodyCopy>

          <Panel className="mt-16 grid grid-cols-3 gap-6 p-7">
            {[
              ["commits", "000+"],
              ["projects", "00"],
              ["years", "00"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-sm font-medium text-[#5f5f5a]">{label}</p>
                <p className="mt-5 text-4xl font-bold text-[#f5f5f0]">
                  {value}
                </p>
              </div>
            ))}
          </Panel>
        </PageColumn>

        <PageColumn className="gap-7">
          {projects.map((project) => (
            <Panel key={project.name} className="p-7">
              <h2 className="text-2xl font-semibold text-[#f5f5f0]">
                {project.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-[#b6f36b]">
                {project.meta}
              </p>
              <p className="mt-8 max-w-md text-lg leading-8 text-[#9a9a92]">
                {project.description}
              </p>
              <div className="mt-8 h-px bg-[#2b2b2e]" />
              <a
                href="#"
                className="mt-5 inline-flex text-sm font-semibold text-[#f5f5f0]"
              >
                View repository -&gt;
              </a>
            </Panel>
          ))}
        </PageColumn>
      </PageGrid>
    </PortfolioShell>
  );
}
