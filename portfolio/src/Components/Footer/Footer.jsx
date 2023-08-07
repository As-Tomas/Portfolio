const Footer = () => {
  return (
    <div className="group relative overflow-hidden">
      <footer className=" z-20 fixed bottom-0  w-full mx-auto text-white text-lg sm:text-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-md border-t-2 rounded-t-2xl border-[rgba(255,255,255,0.3)] ">
        <section className="max-w-4xl  mx-auto px-2  sm:p-2 2xl:p-2 flex flex-row items-center justify-between">
          
          <address>
            <a href="#contact" className=" sm:block hidden hover:opacity-90">
              Contact Me
            </a>
            
            <h2>
              Email:
            </h2>
              <a href="mailto:tomas.bance@gmail.com"> tomas.bance@gmail.com</a>
          </address>

          <nav className="flex flex-col sm:gap-1" aria-label="footer">
            <h2>
              Phone: 
            </h2>
            <a href="tel:+4796889383"> (+47) 968 893 83</a>
          </nav>

          <div className="hidden flex-col md:flex sm:gap-1">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">
              All Rights Reserved
            </p>
          </div>

        </section>
      </footer>
      <div
        className=" z-10 fixed bottom-0 h-14 sm:h-24   w-full overflow-hidden before:bottom-0 before:absolute before:left-[-100%] rounded-t-2xl  
      before:w-full before:h-14 before:sm:h-24 before:content-'' before:bg-gradient-to-r before:transform  before:from-transparent before:via-[rgba(255,255,255,0.3)]
      before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[100%]"
      ></div>
    </div>
  );
};

export default Footer;