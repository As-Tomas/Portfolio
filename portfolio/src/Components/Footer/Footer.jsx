const Footer = () => {
  return (
    <div className="group relative overflow-hidden">
      <footer className=" z-20 fixed bottom-0 h-24  w-full mx-auto text-white text-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-md border-t-2 rounded-t-2xl border-[rgba(255,255,255,0.3)] ">
        <section className="max-w-4xl py-5 mx-auto p-4 flex  flex-row justify-between">
          <address>
          <a href="#contact" className="hover:opacity-90">
              Contact Me
            </a>
            <br />
            
            <h2>
            Email:
            <a href="mailto:tomas.bance@gmail.com"> tomas.bance@gmail.com</a>
            </h2>
          </address>
          <nav className="flex flex-col gap-2" aria-label="footer">
            <h2>
            Phone: <a href="tel:+4796889383">(+47) 968 893 83</a>
            </h2>
            
          </nav>
          <div className="hidden md:flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
      <div
        className=" z-10 h-24 fixed bottom-0 w-full overflow-hidden before:bottom-0 before:absolute before:left-[-100%] rounded-t-2xl  
      before:w-full before:h-24 before:content-'' before:bg-gradient-to-r before:transform  before:from-transparent before:via-[rgba(255,255,255,0.3)]
      before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[100%]"
      ></div>
    </div>
  );
};

export default Footer;
//relative  h-40 overflow-hidden