import Link from "next/link";

const VARIANTS = {
  primary:
    "bg-secondary-900 text-white shadow-glow hover:bg-secondary-800 hover:-translate-y-0.5 focus-visible:outline-primary-500",
  secondary:
    "glass-panel text-secondary-900 hover:-translate-y-0.5 hover:border-primary-300 focus-visible:outline-primary-500",
};

const SIZES = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  icon: Icon,
  className = "",
  children,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {Icon && (
          <Icon
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && (
        <Icon
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
