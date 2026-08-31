type PhotoSlotProps = {
  className?: string;
};

// Soft-edged portrait: a radial mask fades the photo into the page background
// instead of a hard rectangle, so it reads as intentional against #fafaf9.
export default function PhotoSlot({ className = "" }: PhotoSlotProps) {
  return (
    <div
      className={`aspect-[4/5] w-full overflow-hidden ${className}`}
      style={{
        maskImage: "radial-gradient(ellipse 78% 90% at 50% 42%, black 62%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 78% 90% at 50% 42%, black 62%, transparent 100%)",
      }}
    >
      <img
        src="/photo/headshot.jpg"
        alt="Pankaj Kumar"
        className="h-full w-full object-cover object-top grayscale-[15%]"
      />
    </div>
  );
}
