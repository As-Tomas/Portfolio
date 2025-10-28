const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='fixed bottom-6 left-1/2 z-30 w-full max-w-5xl -translate-x-1/2 px-4'>
      <div className='glass-surface flex flex-col gap-4 rounded-[26px] border border-white/20 px-6 py-4 text-white shadow-[0_18px_45px_rgba(5,8,22,0.45)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between'>
        <address className='not-italic text-sm sm:text-base'>
          <div className='muted-text text-xs uppercase tracking-[0.35em]'>Email</div>
          <a href='mailto:tomas.bance@gmail.com' className='neon-underline is-active text-white'>
            tomas.bance@gmail.com
          </a>
        </address>

        <div className='text-sm sm:text-base'>
          <div className='muted-text text-xs uppercase tracking-[0.35em]'>Phone</div>
          <a href='tel:+4796889383' className='text-white/80 transition hover:text-white'>
            (+47) 968 893 83
          </a>
        </div>

        <div className='text-right text-xs uppercase tracking-[0.35em] text-white/60'>
          © {year} Tomas Bance
        </div>
      </div>
    </footer>
  );
};

export default Footer;
