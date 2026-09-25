import Reveal from "./Reveal";
import ProjectCarousel from "./ProjectCarousel";
import { site } from "@/lib/site";

export default function SelectedWork() {
  return (
    <section id="work" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-label text-brass">
            SELECTED SIGNALS
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            A few problems I&apos;ve explored through data, analysis and
            technology.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <ProjectCarousel />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-16">
            <a
              href={site.portfolioUrl}
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-label text-paper"
            >
              <span className="border-b border-brass/60 pb-1 transition-colors group-hover:text-brass">
                SEE EVERYTHING →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
