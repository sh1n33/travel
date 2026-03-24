export function MongolianDivider() {
  return (
    <div className="flex items-center gap-4 py-2" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="flex items-center gap-1 rounded-full border border-gold/35 bg-white/70 px-3 py-1">
        <span className="h-2 w-2 rotate-45 rounded-[2px] bg-gold/85" />
        <span className="h-2 w-2 rounded-full border border-gold/85" />
        <span className="h-2 w-2 rotate-45 rounded-[2px] bg-gold/85" />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </div>
  );
}
