export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">
          <span className="h-px w-6 bg-primary-500" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight text-secondary-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-base leading-relaxed text-text-light sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
