interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`flex-1 w-full max-w-6xl p-4 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
