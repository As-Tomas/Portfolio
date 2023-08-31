
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faHeart, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const About = () => {
  const [likes, setLikes] = useState(876);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <section
      id="about"
      className="h-full w-full overflow-y-auto justify-center items-center pt-10 scroll-mt-40 "
    >
      <article>
        <h2 className=" text-2xl font-bold text-center text-slate-900 dark:text-white">
          Welcome! <br /> My name is{" "}
          <span className="text-indigo-700 dark:text-indigo-300">
            Tomas Bance
          </span>{" "}
          <br /> I'm Full-Stack Developer
        </h2>
        <div className="max-w-md sm:max-w-none text-lg  mt-4 text-center  text-slate-700 dark:text-slate-400">
          <p>
             I am extremely curious and self-motivated, I constantly
            develop my skills. I have a huge passion for programming in general
            and hold expertise in frontend and backend technologies, including
            React, Node.js, Java, C#, C++, and Python. I bring a strong work
            ethic to everything I do.
          </p>
          <p>I'm glad that you're here.</p>
          <p>
            Please explore my work and feel free to reach out if you want to
            learn more about me or discuss potential collaborations.
          </p>
        </div>
        <hr className="mx-auto my-5 bg-black dark:bg-white w-1/2"></hr>
        <div>
          <section className=" ">
            <div className="pb-5 flex items-center justify-center">
              <div className="md:w-3/4 xl:w-1/2">
                <div className="text-white bg-[#599397] rounded-lg p-5">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="mb-4 text-2xl"
                  />

                  <p className="leading-7">
                    There is nothing impossible... Just question of time and will!
                  </p>

                  <hr className="pb-2" />

                  <div className="flex justify-between">
                    <p>My credo</p>
                    <div className="font-semibold">
                      <span className="rounded-full bg-black bg-opacity-20 py-1 px-2">
                        {likes}
                      </span>
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#f34135" }}
                        
                        onClick={handleLikeClick}
                      />
                     </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
      
    </section>
  );
};

export default About;
