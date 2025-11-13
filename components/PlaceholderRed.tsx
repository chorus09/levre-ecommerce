type PlaceholderProps = {
  className?: string;
};

export function PlaceholderRed({ className }: PlaceholderProps) {
  return (
    <div
      className={`bg-(--color-placeholder-red)/80 rounded-md animate-pulse ${className}`}
    />
  );
}