const Header = ({ setContent }) => {
  return (
    

    <div className="group  ">
      <header className=" fixed top-0 left-0 w-full  h-16 px-20 py-5 bg-[rgba(255,255,255,0.1)]  mx-auto p-4 flex justify-between 
      items-center backdrop-blur-md border-b-2 rounded-b-2xl   border-[rgba(255,255,255,0.2)] z-10">        
         
         <h1 className="text-3xl font-medium">
           <button href="#hero"
            onClick={() => setContent('about')}
            > 
            Portfolio
            </button>
         </h1>
         <div>
           <button
             id="mobile-open-button"
             className="text-3xl sm:hidden focus:outline-none"
           >
             &#9776;
           </button>
           <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
             
             <a
               href="#about"
               className="hover:text-indigo-700 hover:duration-200"
               onClick={() => setContent('about')}
             >
               About
             </a>
            
             <a
               href="#Portfolio"
               className="hover:text-indigo-700 hover:duration-200"
               onClick={() => setContent('projects')}
             >
               Projects
             </a>
             
           </nav>
         </div>
       
        
      </header>
      <div className=" z-50 fixed top-0 left-0 w-full overflow-x-hidden h-16 before:absolute before:top-0 before:left-[-100%] rounded-b-2xl
   before:w-full before:h-full before:content-'' before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,255,255,0.3)] 
   before:to-transparent before:transition-all before:duration-500 before:group-hover:left-[130%]"
      >
      </div>
    </div>
    

   
  );
};

export default Header;
