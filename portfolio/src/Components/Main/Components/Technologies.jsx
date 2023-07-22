

const Technologies = () => {
  return (
    <section id="technologies"
      className="p-6 my-12 scroll-mt-20 widescreen:section-max-height tallscreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
        Known Technologies
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 
            dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <img
            src="./src/assets/android.png"  
            alt="Android" className="w-1/2 mb-4"/>
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">Android Studio</h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">2 year experience</p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Android App dev.</p>
        </li>
        <li
          className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <img
            src="./src/assets/node.svg"
            alt="Node.Js" className="w-1/2 m-8 "/>
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">Node.js</h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">1 year experience</p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Node.js App dev.</p>
        </li>
        <li
          className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
          <img
            src="./src/assets/css.svg"
            alt="Infinity" className="w-1/2 m-7 "/>
          <h3 className="text-3xl text-center text-slate-900 dark:text-white">CSS</h3>
          <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">3 year experience</p>
          <p className="sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">HTML/CSS dev.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Technologies