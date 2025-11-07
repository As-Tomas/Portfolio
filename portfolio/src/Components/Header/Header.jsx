import { useState } from 'react';

const Header = ({ content, setContent }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMenu = (prop) =>{
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    
    if (prop === 'about') {
      setContent('about')
    } else {
      setContent('projects')
    }
  }

  return (
    <div className="group">
      <header
        className="z-30 fixed top-0 left-0 w-full h-16 px-6 sm:px-12 lg:px-20 flex items-center justify-between
      bg-white/10 border-b border-white/25 backdrop-blur-2xl rounded-b-2xl shadow-[0_18px_35px_rgba(15,23,42,0.22)]"
      >
         
         <h1 className=" text-2xl sm:text-3xl font-medium">
           <button href="#hero"
            onClick={() => hideMenu('about')}
            > 
            Portfolio
            </button>
         </h1>
         <div>
           <button
             id="mobile-open-button"
             className="text-3xl sm:hidden focus:outline-none"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
           >
             &#9776;
           </button>
           <nav
             id="mobile-menu"
             className={`sm:block text-xl ${
               isMobileMenuOpen
                 ? 'z-50 flex flex-col justify-start items-start absolute p-6 pr-16 gap-5 top-full right-0 rounded-2xl overflow-hidden sm:overflow-visible sm:rounded-none border border-white/25 sm:border-0 shadow-[0_18px_45px_rgba(15,23,42,0.35)] sm:shadow-none'
                 : 'hidden space-x-8'
             }`}
             aria-label="main"
           >
             {isMobileMenuOpen && (
               <span
                 className="sm:hidden pointer-events-none absolute inset-0 -z-10 bg-white/40 backdrop-blur-3xl"
                 aria-hidden="true"
               />
             )}

             
             <a
               href="#About"
               className={`transition-colors duration-200 ${
                 content === 'about' ? 'aurora-underline text-white' : 'text-white/70 hover:text-[#00f5d4]'
               }`}
               onClick={() => hideMenu('about')}
             >
               About
             </a>
            
             <a
               href="#Portfolio"
               className={`transition-colors duration-200 ${
                 content === 'projects' ? 'aurora-underline text-white' : 'text-white/70 hover:text-[#ff8906]'
               }`}
               onClick={() => hideMenu('projects')}
             >
               Projects
             </a>
             
           </nav>
         </div>       
      </header>
      <div className=" z-20 fixed backdrop-blur-md top-0 left-0 w-full overflow-x-hidden h-16 before:absolute before:top-0 before:left-[-100%] rounded-b-2xl
   before:w-full before:h-full before:content-'' before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.3)] 
   before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[130%]"
      >
      </div>
    </div>
    

   
  );
};

export default Header;
