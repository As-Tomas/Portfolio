export const Contact = () => {
  return (
    <div className="flex h-full w-full overflow-y-auto items-center justify-center pt-6 scroll-mt-40 text-white">
      <div className="glass-panel max-w-xl rounded-[28px] border border-white/15 bg-white/12 px-8 py-10 sm:px-10 sm:py-12 text-left shadow-lg">
        <h3 className="text-2xl font-semibold text-white">Let's collaborate</h3>
        <p className="mt-3 text-sm text-white/70">
          Prefer personal introductions over cold forms. Reach out via email or phone and we'll shape the right channel for your project.
        </p>
        <div className="mt-6 space-y-2 text-base">
          <a href="mailto:tomas.bance@gmail.com" className="aurora-underline">
            tomas.bance@gmail.com
          </a>
          <div className="text-white/70">(+47) 968 893 83</div>
        </div>
      </div>
    </div>
  );
};
