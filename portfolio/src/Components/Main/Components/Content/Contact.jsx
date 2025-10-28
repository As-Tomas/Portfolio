export const Contact = () => {
  return (
    <div className="flex h-full w-full overflow-y-auto items-center justify-center pt-6 scroll-mt-40 text-white">
      <div className="glass-panel bg-white/12 px-6 py-10 sm:px-10 sm:py-12 text-center max-w-xl flex flex-col gap-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Let’s build together</p>
          <h3 className="text-2xl font-semibold">Have an idea worth prototyping?</h3>
        </header>
        <p className="text-white/80 leading-relaxed text-base">
          I’m always curious about ambitious collaborations—whether it’s a product sprint, a long-term partnership, or a
          daring experiment in glassmorphic UI. Reach out with a short brief and let’s explore the possibilities.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-white/70">
          <span className="glass-chip">Full-stack delivery</span>
          <span className="glass-chip">Design systems</span>
          <span className="glass-chip">Prototyping</span>
        </div>
        <a className="glass-btn" href="mailto:tomas.bance@gmail.com">
          Start the conversation
        </a>
      </div>
    </div>
  );
};
