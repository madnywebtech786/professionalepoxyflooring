export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
