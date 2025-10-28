const Footer = () => {
  return (
    <div className='group relative overflow-hidden'>
      <footer className='z-20 fixed bottom-0 w-full mx-auto h-14 sm:h-[75px] text-slate-100 text-lg bg-white/10 backdrop-blur-2xl border-t border-white/20 rounded-t-2xl shadow-[0_-18px_35px_rgba(15,23,42,0.22)] flex items-center'>
        <section className='max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-row items-center justify-between'>
          <address className='not-italic leading-tight'>
            <h2 className='uppercase tracking-widest text-xs text-white/60'>Email</h2>
            <a className='aurora-underline hover:text-[#8eceff] transition-colors' href='mailto:tomas.bance@gmail.com'> tomas.bance@gmail.com</a>
          </address>

          <nav className='flex flex-col sm:gap-1 leading-tight' aria-label='footer'>
            <h2 className='uppercase tracking-widest text-xs text-white/60'>Phone</h2>
            <a className='hover:text-[#ffd23f] transition-colors' href='tel:+4796889383'> (+47) 968 893 83</a>
          </nav>

          <div className='hidden flex-col md:flex sm:gap-1 text-right leading-tight text-white/70'>
            <p>
              Copyright &copy; <span id='year'>2023</span>
            </p>
            <p>All Rights Reserved</p>
          </div>
        </section>
      </footer>
      <div
        className="z-10 fixed bottom-0 h-14 sm:h-[75px] w-full overflow-hidden before:bottom-0 before:absolute before:left-[-100%] rounded-t-2xl
      before:w-full before:h-full before:content-'' before:bg-gradient-to-r before:transform before:from-transparent before:via-[rgba(255,255,255,0.3)]
      before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[100%]"
      ></div>
    </div>
  );
};

export default Footer;
