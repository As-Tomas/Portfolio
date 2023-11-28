import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faHeart,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [likes, setLikes] = useState(876);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const { ref:thisIsVisible, inView: isVisible } = useInView();


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
        <div className="max-w-md sm:max-w-none text-lg  mt-4 px-14  text-center  text-slate-700 dark:text-slate-400">
        <p
            style={{
              textIndent: "2em",
              textAlign: "justify",
              textJustify: "inter-word",
              textAlignLast: "left",
            }}
          >
            Hello! I'm Tomas, Full-Stack Developer with a penchant for
            E-commerce and mobile app development. My toolkit? Java, C++,
            JavaScript, React, React Native, and more. I’m looking to
            collaborate on anything what is related to APP's As a gear up I
            finished my bachelor's degree at SMK University as a programmer, I'm
            eager for new challenging projects.
          </p>
          <div className=" text-left justify " style={{ textIndent: "2em" }}>
            Curious about my journey or where we can go next? Dive into my
            portfolio!
          </div>
          {/* <p
            style={{
              textIndent: "2em",
              textAlign: "justify",
              textJustify: "inter-word",
              textAlignLast: "left",
            }}
          >
            I am extremely curious and self-motivated, and I constantly develop
            my skills. I have a huge passion for programming in general and hold
            expertise in frontend and backend technologies, including React,
            Node.js, Java, C#, C++, and Python. I bring a strong work ethic to
            everything I do.
          </p>
          <div className=" text-left justify " style={{ textIndent: "2em" }}>
            Outside of work hours, you'll often find me chasing adrenaline highs
            or tinkering with gadgets with soldering-iron in hands.
          </div>
          <p
            style={{
              textIndent: "2em",
              textAlign: "justify",
              textJustify: "inter-word",
              textAlignLast: "left",
            }}
          >
            Extreme Sports: I've always been drawn to the thrill and excitement
            that extreme sports offer. Skiing is more than a hobby for me; it's
            a passion. Whether it's racing down the slopes or freestyling in a
            snow park, the adrenaline rush is exhilarating. But it's not just
            about the thrill; it's also about being in touch with nature and
            pushing my physical and mental boundaries. I often find myself
            hitting the slopes, and each time it feels like a new adventure.
          </p>
          <p
            style={{
              textIndent: "2em",
              textAlign: "justify",
              textJustify: "inter-word",
              textAlignLast: "left",
            }}
          >
            Technical Tinkering: When I'm not out seeking adventures, I love to
            get my hands dirty with some technical tinkering. Soldering
            circuits, building gadgets, and fixing anything that's broken are
            some of the things that keep me occupied. There's a unique
            satisfaction in taking something apart, understanding how it works,
            and then putting it back together in a better form. It's not just
            about fixing things, it's about understanding them.
          </p>

          <p>
            I'm located in Bergen, and I'm glad that you're here. Please explore my work and feel free to
            reach out if you want to learn more about me or discuss potential
            collaborations.
          </p> */}
        </div>
        <hr className="mx-auto my-5 bg-black dark:bg-white w-1/2"></hr>
        <div>
          <section className=" ">
            <div className="pb-5 flex items-center justify-center">
              <div className="md:w-3/4 xl:w-1/2">
                <div className="text-white bg-[#1eaeb8c2] border border-[#2a7b81] rounded-lg p-5">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="mb-4 text-2xl"
                  />

                  <p className="leading-7">
                    There is nothing impossible... Just question of time and
                    will!
                  </p>

                  <hr className="pb-2" />

                  <div className="flex justify-between">
                    <p ref={thisIsVisible}
                    >
                      My credo</p>
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

export default About;
