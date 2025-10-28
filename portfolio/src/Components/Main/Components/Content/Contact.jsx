export const Contact = () => {
  return (
    <div className="glass-scroll flex h-full w-full items-center justify-center overflow-y-auto px-4 py-6 text-center">
      <div className="glass-surface max-w-xl rounded-[28px] border border-white/15 p-8 text-white shadow-lg">
        <h3 className="text-2xl font-semibold">Let&apos;s collaborate</h3>
        <p className="muted-text mt-3 text-sm">
          Prefer personal introductions over cold forms. Reach out via email or phone and we&apos;ll shape the right channel for your project.
        </p>
        <div className="mt-6 space-y-2 text-base">
          <a href="mailto:tomas.bance@gmail.com" className="neon-underline is-active text-white">
            tomas.bance@gmail.com
          </a>
          <div className="muted-text">(+47) 968 893 83</div>
        </div>
      </div>
    </div>
  );
};
