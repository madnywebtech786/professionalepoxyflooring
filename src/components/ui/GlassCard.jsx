export default function GlassCard({
  className = "",
  children,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={`glass-panel rounded-xl p-6 shadow-soft transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-glow ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
