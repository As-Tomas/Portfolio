import PieChartDevelopment from "../Charts/Pie-Chart_Development";
import PieChartProgramer from "../Charts/Pie-Chart_Programer";
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
  
  const { ref:thisIsVisible, inView: isVisible } = useInView();

  return (
    <section
      id="technologies"
      className="p-6 text-center scroll-mt-20 h-full w-full overflow-y-auto  "
    >
      <h2 className="text-3xl font-bold mb-6 text-slate-900 ">
        Known Technologies
      </h2>
      <h3>SOFTWARE ENGINEER, FULL-STACK DEVELOPER.</h3>
      <div className=" pt-10 flex flex-wrap flex-col justify-center items-center md:flex-row">
        <div className=" w-5/6 md:w-1/2">
          <PieChartDevelopment />
        </div>
        <div className=" w-5/6 md:w-1/2">
          <PieChartProgramer />
        </div>
      </div>
      <hr className="mx-auto my-10 bg-black  w-1/2"></hr>
      <ul className="list-none mx-auto my-12 flex flex-wrap justify-center gap-8">
        <li className="flex-1 flex flex-col items-center border border-solid bg-gradient-to-br from-inherit to-inherit 
         py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./assets/GeneralIcons/software-developer.png"
            alt="Android"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900  underline decoration-4 decoration-sky-500">
            Software Development
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 -400">
            Experienced in both functional and OOP: <br></br> C#, Java, Python,
            JavaScript programing languages.
          </p>
          <p className=" text-base mt-2 text-slate-500 -400">
            Software App dev.
          </p>
        </li>
        <li className="flex-1 flex flex-col items-center border border-solid  bg-gradient-to-br from-inherit to-inherit  py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./assets/GeneralIcons/front-end.png"
            alt="Node.Js"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900  underline decoration-4 decoration-pink-500">
            Frontend Development{" "}
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 -400">
            Experienced development in HTML, CSS, JS and React framework.
          </p>
          <p className=" text-base mt-2 text-slate-500 -400">
            Frontend App dev.
          </p>
        </li>
        <li className="flex-1 flex flex-col items-center border border-solid  bg-gradient-to-br from-inherit to-inherit  py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./assets/GeneralIcons/cloud-technology.png"
            alt="Infinity"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900  underline decoration-4 decoration-indigo-500">
            Android, iOS platforms App Development
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 -400">
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the .NET MAUI, Android Studio frameworks.
          </p>
          <p className=" text-base mt-2 text-slate-500 -400">
            Platform specific App Development.
          </p>
        </li>
      </ul>
      <hr className="mx-auto my-10 bg-black  w-1/2"></hr>
      <div
      id="tools"
      className="p-5 flex flex-col  gap-4 border border-solid bg-gradient-to-br from-inherit to-inherit rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-slate-900"> Tools I Use</h2>
        <div >
          <h3 className="p-4 text-xl font-semibold">My main Design & Image Editing Tools  </h3>
          <div className="pb-10 flex flex-wrap justify-center gap-4">
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54]  rounded hover:scale-125 transition shadow" src="./assets/blender.png" alt="Blender"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54]  rounded hover:scale-125 transition shadow" src="./assets/figma.svg" alt="Figma"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54]  rounded hover:scale-125 transition shadow" src="./assets/photoShop.svg" alt="PhotoShop"  />
          </div>
        
        </div>

        <div >
          <h3 className="p-4 text-xl font-semibold">My main programing Languages </h3>
          <div className="pb-10 lg:mx-20 xl:mx-32 2xl:mx-40 flex flex-wrap justify-center gap-4">
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/java.svg" alt="Java"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/js.svg" alt="Js"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/csharp.svg" alt="Csharp"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/Cplus.svg" alt="Cplus"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/python.svg" alt="Python"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/mongoDB.png" alt="MongoDB"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/Microsoft_SQL_Server.png" alt="Microsoft SQL Server"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/tailwind.svg" alt="Tailwind"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/html.svg" alt="Html"  />
            <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/css.svg" alt="Css"  />
          </div>
          
        
        </div>

        <div 
        ref={thisIsVisible}
        >
          <h3 className="p-4 text-xl font-semibold">My main Development Environments  </h3>
          <div className="pb-10 lg:mx-20 xl:mx-32 2xl:mx-40 flex flex-wrap justify-center gap-4">
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/dot_net.svg" alt="Dot_net"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/visual_studio.png" alt="Visual Studio"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/vscode.svg" alt="VsCode"  />        
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/android.png" alt="Android"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/intellij.png" alt="Intellij"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/pcharm.png" alt="Pcharm"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/wordpress.svg" alt="Wordpress"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/react.svg" alt="React"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./vite.svg" alt="Vite"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/node.svg" alt="Node.js"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/nextjs.png" alt="nextjs.png"  />
          <img className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow" src="./assets/sanity.png" alt="sanity.png"  />
          
          <div className="w-14 h-14 lg:w-20 lg:h-20 p-2 bg-gradient-to-br from-[#ffffffa6] to-[#ffffff54] rounded hover:scale-125 transition shadow flex items-center justify-center ">

            <svg viewBox="0 0 71 20" fill="none" role="img" className="icon-md w-[64px]  " title="Expo home"><path d="M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z" fill="currentColor"></path></svg>
          </div>
        </div>        

        </div>        
      </div>
      <div       
      className={`flex justify-center items-center  -ml-[20vw] ${isVisible ? "hidden" : ""}`}>
        <img 
        className=" absolute bottom-3 h-10 animate-bounceOnce     "
        src="./assets/GeneralIcons/wheel_scroll_mouse.svg" alt="" 
        />
      </div>
    </section>
  );
};

export default Technologies;
