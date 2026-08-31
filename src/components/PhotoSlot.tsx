type PhotoSlotProps = {
  className?: string;
};

export default function PhotoSlot({ className = "" }: PhotoSlotProps) {
  return (
    <div className={`aspect-[4/5] w-full overflow-hidden border border-[var(--color-border)] ${className}`}>
      <img
        src="/photo/headshot.jpg"
        alt="Pankaj Kumar"
        className="h-full w-full object-cover object-top grayscale contrast-125"
      />
    </div>
  );
}
