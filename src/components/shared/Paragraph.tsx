interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ className, children }: ParagraphProps) {
  return (
    <div
      className={`text-heading-3 md:text-lg ${className}`}
    >
      {children}
    </div>
  );
}
