import PieChartDevelopment from "../Charts/Pie-Chart_Development";
import PieChartProgramer from "../Charts/Pie-Chart_Programer";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="p-6 text-center scroll-mt-20 h-[70vh] w-full overflow-y-auto  "
    >
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
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
      <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
      <ul className="list-none mx-auto my-12 flex flex-wrap justify-center gap-8">
        <li className="flex-1 flex flex-col items-center border border-solid bg-gradient-to-br from-inherit to-inherit dark:bg-black py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./src/assets/GeneralIcons/software-developer.png"
            alt="Android"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900 dark:text-white underline decoration-4 decoration-sky-500">
            Software Development
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 dark:text-slate-400">
            Experienced in both functional and OOP: <br></br> C#, Java, Python,
            JavaScript programing languages.
          </p>
          <p className=" text-base mt-2 text-slate-500 dark:text-slate-400">
            Software App dev.
          </p>
        </li>
        <li className="flex-1 flex flex-col items-center border border-solid dark:border-gray-100 bg-gradient-to-br from-inherit to-inherit dark:bg-black py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./src/assets/GeneralIcons/front-end.png"
            alt="Node.Js"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900 dark:text-white underline decoration-4 decoration-pink-500">
            Frontend Development{" "}
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 dark:text-slate-400">
            Experienced development in HTML, CSS, JS and React framework.
          </p>
          <p className=" text-base mt-2 text-slate-500 dark:text-slate-400">
            Frontend App dev.
          </p>
        </li>
        <li className="flex-1 flex flex-col items-center border border-solid dark:border-gray-100 bg-gradient-to-br from-inherit to-inherit dark:bg-black py-6 px-2 rounded-2xl shadow-xl">
          <img
            src="./src/assets/GeneralIcons/cloud-technology.png"
            alt="Infinity"
            className="w-1/5 "
          />
          <h3 className="text-xl font-medium text-slate-900 dark:text-white underline decoration-4 decoration-indigo-500">
            Android, iOS platforms App Development
          </h3>
          <p className="hidden sm:block text-lg mt-2 text-slate-500 dark:text-slate-400">
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the .NET MAUI, Android Studio frameworks.
          </p>
          <p className=" text-base mt-2 text-slate-500 dark:text-slate-400">
            Platform specific App Development.
          </p>
        </li>
      </ul>
      <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
      <div
      id="tools"
      className="p-5 flex flex-col  gap-4 bg-gradient-to-br from-inherit to-inherit rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-slate-900"> Tools I Use</h2>
        <div >
          <h3 className="p-4 text-xl font-semibold">My main Design & Image Editing Tools  </h3>
          <div className="pb-10 flex flex-wrap justify-center gap-4">
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/blender.png" alt="Blender"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/figma.svg" alt="Figma"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/photoShop.svg" alt="PhotoShop"  />
          </div>
        
        </div>

        <div >
          <h3 className="p-4 text-xl font-semibold">My main programing Languages </h3>
          <div className="pb-10 flex flex-wrap justify-center gap-4">
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/java.svg" alt="Java"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/js.svg" alt="Js"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/csharp.svg" alt="Csharp"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/Cplus.svg" alt="Cplus"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/python.svg" alt="Python"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/mongoDB.png" alt="MongoDB"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/Microsoft_SQL_Server.png" alt="Microsoft SQL Server"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/tailwind.svg" alt="Tailwind"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/html.svg" alt="Html"  />
          <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/css.svg" alt="Css"  />
          </div>
        
        </div>

        <div >
        <h3 className="p-4 text-xl font-semibold">My main Development Environments  </h3>
        <div className="pb-10 flex flex-wrap justify-center gap-4">
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/dot_net.svg" alt="Dot_net"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/visual_studio.png" alt="Visual Studio"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/vscode.svg" alt="VsCode"  />        
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/android.png" alt="Android"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/intellij.png" alt="Intellij"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/pcharm.png" alt="Pcharm"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/wordpress.svg" alt="Wordpress"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/react.svg" alt="React"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./vite.svg" alt="Vite"  />
        <img className="w-20 h-20 p-2 bg-gradient-to-br from-inherit to-inherit  rounded hover:scale-125 transition shadow" src="./src/assets/node.svg" alt="Node.js"  />
        </div>
        

        </div>        
      </div>
    </section>
  );
};

export default Technologies;
