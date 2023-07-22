const Footer = () => {
  return (
    <div className="group relative  h-40 overflow-hidden">
      <footer className=" z-50 absolute h-40 w-full mx-auto text-white text-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-md border-t-2 rounded-t-2xl border-[rgba(255,255,255,0.3)] ">
        <section className="max-w-4xl py-5 mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
          <address>
            <h2>You can find me.</h2>
            5555 Bergen Norway
            <br />
            Email:{" "}
            <a href="mailto:tomas.bance@gmail.com">tomas.bance@gmail.com</a>
            <br />
            Phone: <a href="tel:+4796889383">(+47) 968 893 83</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
            <a href="#home" className="hover:opacity-90">
              Back to top
            </a>
            <a href="#technologies" className="hover:opacity-90">
              Technologies
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Me
            </a>
          </nav>
          <div className="flex flex-col sm:gap-2">
            <p className="text-right">
              Copyright &copy; <span id="year">2023</span>
            </p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </section>
      </footer>
      <div
        className=" z-30 h-40  w-full overflow-hidden before:absolute before:left-[-100%] rounded-t-2xl  
      before:w-full before:h-40 before:content-'' before:bg-gradient-to-br before:transform before:rotate-45 before:from-transparent before:via-[rgba(255,255,255,0.3)]
      before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[100%]"
      ></div>
    </div>
  );
};

export default Footer;
