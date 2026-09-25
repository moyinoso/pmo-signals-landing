import { site, caseStudyUrl } from "@/lib/site";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-label text-paper"
        >
          {site.shortName}
          <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-brass align-middle" />
        </a>
        <div className="flex items-center gap-6 font-mono text-xs tracking-label text-muted">
          <a href="#work" className="transition-colors hover:text-brass">
            WORK
          </a>
          <a href="#contact" className="transition-colors hover:text-brass">
            CONTACT
          </a>
          <a
            href={site.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-paper transition-colors hover:text-brass sm:block"
          >
            FULL PORTFOLIO ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
