import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        "mb-10 flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
      ].join(" ")}
    >
      <span className="section-label">{eyebrow}</span>
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-balance text-4xl font-semibold leading-none text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  );
}
