import { site, links } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      {/* full portfolio transition */}
      <a
        href={site.portfolioUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border-b border-line transition-colors hover:bg-panel"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-label text-brass">
              THE SIGNAL CONTINUES
            </p>
            <p className="mt-4 font-serif text-3xl font-light text-paper sm:text-4xl">
              Want to see the full investigation?
            </p>
          </div>

          <span className="font-mono text-xs tracking-label text-muted transition-colors group-hover:text-brass">
            SEE EVERYTHING →
          </span>
        </div>
      </a>

      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <div className="flex gap-6 font-mono text-[11px] tracking-label text-muted">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brass"
          >
            GitHub
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brass"
          >
            LinkedIn
          </a>

          <a
            href={links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brass"
          >
            Medium
          </a>
        </div>

        <p className="font-mono text-[11px] text-muted/60">
          © 2026 {site.name}
        </p>
      </div>
    </footer>
  );
}