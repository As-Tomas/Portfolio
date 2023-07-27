import PieChartDevelopment from "../Charts/Pie-Chart_Development";

const About = () => {
  return (
    <section
      id="home"
      className=" justify-center items-center gap-8 
       pt-10 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
    >
      <article>
        <h2 className="max-w-none text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
          Welcome. <br /> My name is{" "}
          <span className="text-indigo-700 dark:text-indigo-300">
            Tomas Bance
          </span>{" "}
          <br /> I'm Full-Stack Developer
        </h2>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
        I am an extremely curious and self-motivated individual with a
                huge passion for design in general. As an autodidact, I take a
                very positive and ego-free approach to all aspects of my life,
                and I carry a strong work ethic with me wherever I go.
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          I am glad that you are here.
        </p>
      </article>
      <div className="z-20">
        <PieChartDevelopment />
      </div>
      
    
    </section>
  );
};

export default About;
