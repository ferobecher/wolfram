function Wordmark({ className = "" }) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <span className="font-display text-[19px] font-bold tracking-[0.32em] text-white">
        WOLFRAM
      </span>
      <span className="h-5 w-px bg-white/25" />
      <span className="font-display text-[13px] font-normal tracking-[0.42em] text-muted-foreground">
        GROUP
      </span>
    </div>
  );
}

export default Wordmark;
