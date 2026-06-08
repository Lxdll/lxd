import Link from "next/link";
import { navItems, type NavKey } from "@/components/portfolio-data";

type PortfolioShellProps = {
  active: NavKey;
  children: React.ReactNode;
};

export function PortfolioShell({ active, children }: PortfolioShellProps) {
  return (
    <main className="min-h-screen bg-[#050505] px-4 py-4 text-[#f5f5f0] sm:px-6 sm:py-6 lg:px-10">
      <div className="mx-auto min-h-[calc(100vh-2rem)] w-full max-w-[1440px] overflow-hidden bg-[#050505] sm:min-h-[calc(100vh-3rem)]">
        <header className="relative flex min-h-24 items-center justify-end border-b border-[#2b2b2e] px-5 sm:px-10 lg:px-[72px]">
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap items-center justify-end gap-2 sm:gap-4"
          >
            {navItems.map((item) => {
              const isActive = item.key === active;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#f5f5f0] text-[#050505]"
                      : "text-[#9a9a92] hover:text-[#f5f5f0]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <div className="relative border-x border-[#202023]">{children}</div>

        <footer className="flex flex-col gap-3 border-t border-[#2b2b2e] px-5 py-7 text-sm font-medium text-[#5f5f5a] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-[72px]">
          <p>status: available_for_selected_projects</p>
          <p>github / blog / email</p>
        </footer>
      </div>
    </main>
  );
}

export function PageGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid min-h-[686px] grid-cols-1 lg:grid-cols-2">
      {children}
    </section>
  );
}

export function PageColumn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex min-h-[520px] flex-col justify-center px-6 py-16 sm:px-10 lg:min-h-[686px] lg:px-14 xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b6f36b]">
      {children}
    </p>
  );
}

export function DisplayTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-10 max-w-2xl text-5xl font-bold leading-[0.98] tracking-normal text-[#f5f5f0] sm:text-6xl xl:text-[72px]">
      {children}
    </h1>
  );
}

export function BodyCopy({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 max-w-xl text-lg leading-8 text-[#9a9a92]">{children}</p>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-[#2b2b2e] bg-[#0b0b0c] ${className}`}>
      {children}
    </div>
  );
}
