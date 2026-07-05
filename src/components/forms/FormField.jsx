export default function FormField({ label, htmlFor, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-secondary-800">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
