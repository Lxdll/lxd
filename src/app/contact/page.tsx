import {
  BodyCopy,
  DisplayTitle,
  Eyebrow,
  PageColumn,
  PageGrid,
  Panel,
  PortfolioShell,
} from "@/components/portfolio-shell";

export default function ContactPage() {
  return (
    <PortfolioShell active="contact">
      <PageGrid>
        <PageColumn className="lg:border-r lg:border-[#202023]">
          <Eyebrow>Contact</Eyebrow>
          <DisplayTitle>
            Let&apos;s build something
            <br />
            clean and useful.
          </DisplayTitle>
          <BodyCopy>
            这里预留联系方式和个人链接。可以放邮箱、GitHub、博客、
            LinkedIn 或微信二维码区域。
          </BodyCopy>

          <div className="mt-16 grid max-w-xl gap-6 sm:grid-cols-[164px_1fr]">
            <Panel className="grid aspect-square place-items-center p-6 text-center text-base font-medium leading-7 text-[#5f5f5a]">
              QR / avatar
              <br />
              placeholder
            </Panel>
            <Panel className="p-7">
              <pre className="font-mono text-base leading-8 text-[#f5f5f0]">
                {`$ mail --to you
subject: hello
body: your message here`}
              </pre>
            </Panel>
          </div>
        </PageColumn>

        <PageColumn>
          <Panel className="w-full max-w-xl p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f5f5a]">
              Email
            </p>
            <a
              href="mailto:email@example.com"
              className="mt-4 block text-2xl font-semibold text-[#f5f5f0]"
            >
              email@example.com
            </a>

            <div className="my-9 h-px bg-[#2b2b2e]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f5f5a]">
              GitHub
            </p>
            <a
              href="https://github.com/your-name"
              className="mt-4 block text-2xl font-semibold text-[#f5f5f0]"
            >
              github.com/your-name
            </a>

            <div className="my-9 h-px bg-[#2b2b2e]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5f5f5a]">
              Message
            </p>
            <p className="mt-4 text-xl font-medium text-[#b6f36b]">
              Available for selected projects
            </p>
          </Panel>
        </PageColumn>
      </PageGrid>
    </PortfolioShell>
  );
}
