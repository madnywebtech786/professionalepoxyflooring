export default function Badge({ icon: Icon, className = "", children, ...props }) {
  return (
    <div
      className={`inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-secondary-700 ${className}`}
      {...props}
    >
      {Icon && <Icon className="size-3.5 text-primary-600" aria-hidden="true" />}
      {children}
    </div>
  );
}
