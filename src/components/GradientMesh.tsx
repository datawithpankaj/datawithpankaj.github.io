// Fixed ambient background: three large blurred, slowly drifting color blobs
// behind everything else. Sits at z-0 (not a negative z-index) so it paints
// above the body background but under the app's z-10 content wrapper,
// regardless of stacking-context quirks elsewhere on the page.
export default function GradientMesh() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[var(--color-bg)]" aria-hidden="true">
      <div className="animate-drift-a absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[var(--color-accent)]/30 blur-[130px]" />
      <div className="animate-drift-b absolute right-[-12rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-[var(--color-accent-2)]/25 blur-[130px]" />
      <div className="animate-drift-c absolute bottom-[-10rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-[var(--color-accent-3)]/20 blur-[140px]" />
      <div className="absolute inset-0 bg-[var(--color-bg)]/50" />
    </div>
  );
}
