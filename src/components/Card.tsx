export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative group bg-foreground text-background ${className}`}
    >
      <div className='absolute -z-10 w-full h-full top-2 left-2 bg-card-shadow' />
      {children}
    </div>
  );
}
