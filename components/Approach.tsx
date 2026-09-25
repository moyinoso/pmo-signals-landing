import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "OBSERVE",
    body: "Understand the data and the question.",
  },
  {
    n: "02",
    title: "CONNECT",
    body: "Find relationships, patterns and useful signals.",
  },
  {
    n: "03",
    title: "SOLVE",
    body: "Turn findings into something practical.",
  },
];

export default function Approach() {
  return (
    <section className="relative border-t border-line py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-label text-brass">
            METHOD
          </p>
          <h2 className="mt-6 font-serif text-3xl font-light text-paper sm:text-4xl">
            How I approach a problem
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="bg-ink">
              <div className="h-full p-8">
                <span className="font-mono text-xs tracking-label text-brass">
                  {s.n}
                </span>
                <h3 className="mt-6 font-mono text-sm tracking-label text-paper">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
