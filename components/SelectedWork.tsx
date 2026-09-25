import Reveal from "./Reveal";
import ProjectCarousel from "./ProjectCarousel";

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
      </div>
    </section>
  );
}
