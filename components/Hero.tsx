import SignalCanvas from "./SignalCanvas";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* analytical grid + faint axes */}
      <div className="grid-field grid-fade absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-x-0 top-24 hidden justify-between px-6 font-mono text-[10px] tracking-label text-muted/50 lg:flex">
        <span>SIGNAL FIELD</span>
        <span>Nigeria</span>
      </div>
      <SignalCanvas />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
        <p className="mt-6 font-mono text-xs tracking-label text-muted">
          DATA · AI · TECHNOLOGY
        </p>
        <h1 className="mt-8 max-w-4xl font-serif text-4xl font-light leading-[1.15] text-paper sm:text-5xl lg:text-6xl">
          I follow the clues in the data until the bigger picture starts to make sense.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I work across data analysis, AI, and technology to understand problems, uncover patterns, and turn insights into practical solutions.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#work"
            className="group font-mono text-xs tracking-label text-paper"
          >
            <span className="border-b border-brass/60 pb-1 transition-colors group-hover:text-brass">
              VIEW SELECTED WORK →
            </span>
          </a>
          <a
            href="#contact"
            className="group font-mono text-xs tracking-label text-muted"
          >
            <span className="border-b border-line pb-1 transition-colors group-hover:text-brass">
              LET&apos;S TALK →
            </span>
          </a>
        </div>
      </div>

      {/* bottom rule with tick marks */}
      <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex justify-between pb-4 font-mono text-[10px] text-muted/40">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
          <div className="h-px w-full bg-line" />
        </div>
      </div>
    </section>
  );
}
