"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xaenbpba";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative border-t border-line py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="font-mono text-xs tracking-label text-brass">CONTACT</p>

        <h2 className="mt-6 font-serif text-3xl font-light leading-snug text-paper sm:text-4xl">
          Have a question, project or problem?
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Whether it&apos;s a data problem, research question, technical
          project, or something worth figuring out, I&apos;d like to hear
          about it.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] tracking-label text-muted">
                NAME
              </span>

              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-sm text-paper placeholder:text-muted/40 focus:border-brass/50 focus:outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="font-mono text-[10px] tracking-label text-muted">
                EMAIL
              </span>

              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 w-full border border-line bg-transparent px-4 py-3 text-sm text-paper placeholder:text-muted/40 focus:border-brass/50 focus:outline-none"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="font-mono text-[10px] tracking-label text-muted">
              MESSAGE
            </span>

            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none border border-line bg-transparent px-4 py-3 text-sm text-paper placeholder:text-muted/40 focus:border-brass/50 focus:outline-none"
              placeholder="Describe the problem or question…"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group font-mono text-xs tracking-label text-paper disabled:opacity-50"
          >
            <span className="border-b border-brass/60 pb-1 transition-colors group-hover:text-brass">
              {status === "sending"
                ? "SENDING…"
                : status === "sent"
                  ? "MESSAGE SENT ✓"
                  : status === "error"
                    ? "TRY AGAIN →"
                    : "SEND MESSAGE →"}
            </span>
          </button>

          {status === "sent" && (
            <p className="font-mono text-[11px] tracking-wide text-brass">
              Thanks — your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p className="font-mono text-[11px] tracking-wide text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}