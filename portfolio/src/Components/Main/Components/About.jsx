const About = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12
       scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          accusantium itaque, inventore ea officiis vel facere corporis! Dolore,
          possimus delectus ad porro.
        </p>
        <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          I am glad that you are here.
        </p>
      </article>
    </section>
  );
};

export default About;
