interface TestimonialCardProps {
  quote: string;
  name: string;
  origin: string;
}

export function TestimonialCard({
  quote,
  name,
  origin,
}: TestimonialCardProps) {
  return (
    <article className="soft-card pattern-border p-7">
      <p className="text-lg leading-8 text-ink">“{quote}”</p>
      <div className="mt-6 border-t border-border pt-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          {name}
        </p>
        <p className="mt-1 text-sm text-ink-soft">{origin}</p>
      </div>
    </article>
  );
}
