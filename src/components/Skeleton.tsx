export default function Skeleton({ className }: { className?: string }) {
  return <div className={`bg-black/20 animate-pulse ${className}`} />;
}
