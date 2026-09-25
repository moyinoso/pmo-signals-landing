import { type Project } from "@/lib/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="carousel-card flex h-full w-[300px] shrink-0 select-none flex-col border border-line bg-panel/80 p-7 sm:w-[420px]">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-label text-muted">
        <span className="text-brass">SIGNAL {project.signal}</span>
        <span>REC ●</span>
      </div>

      <h3 className="mt-8 font-serif text-xl font-light text-paper sm:text-2xl">
        {project.title}
      </h3>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
        {project.question}
      </p>

      <ul className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] tracking-label text-muted">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-line px-2.5 py-1 transition-colors hover:border-brass/40 hover:text-brass"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
