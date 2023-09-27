
import styles from "./styles.module.css";
import { useEffect, useRef, useCallback  } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPath = () => {

  const { ref:timelineRef, inView: myElementIsVisible } = useInView();
  const { ref:timelineReftwo, inView: myElementIsVisibletwo } = useInView();
  const { ref:timelineRefthree, inView: myElementIsVisiblethree } = useInView();
  const { ref:timelineReffour, inView: myElementIsVisiblefour } = useInView();
  const { ref:timelineReffive, inView: myElementIsVisiblefive } = useInView();
  const { ref:timelineRefsix, inView: myElementIsVisiblesix } = useInView();



  return (
    <div className="mypath  h-full w-full overflow-y-auto ">
      <div className="container p-[2rem] pb-[100px] mx-auto ">
        <div className="topSection text-center py-[1rem] max-w-xl mx-auto">
          <h1 className=" text-3xl">My path</h1>
          <p>
            Here you can see my historical life path, how I found my passion, and where I'm now.
          </p>
        </div>

        <div 
        className="timeLine relative min-h-[150px] ">
          <div
            className="line absolute z-20 left-1/2 transform -translate-x-[-1px] w-[2px] -top-12 -bottom-12 bg-black 
         before:absolute before:block before:h-4 before:w-4 before:rounded-full before:bg-black before:left-1/2 before:transform before:translate-x-[-50%]
         after:absolute after:block after:h-4 after:w-4 after:rounded-full after:bg-black after:left-1/2 after:transform after:translate-x-[-50%]
          after:bottom-0"
          ></div>
          <div
          ref={timelineRef}
          className={`flex relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisible ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.2%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)] text-left">
              <h2 className=" text-2xl">Poker</h2>
              <h3>2016 is where my passion began..</h3>
              <p>
              Besides my daily work as office support, I have been playing poker tournaments in the evenings for many years, and each month's winnings are not a bad salary supplement. But poker games take a lot of time, and here came an idea: why not automate my strategies and save time? A little bit of Google and I found Deep Mind Pokerbot free source at Github, coded in Python, and here my passion began!
              </p>
            </div>
          </div>

          <div
           ref={timelineReftwo}
            className={`flex flex-row-reverse   relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisibletwo ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.8%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl"> WordPress / UiPath</h2>
              <h3>2018</h3>
              <p>
              Found a gap in the local market, and drop shipping has become very popular, so I started to learn WordPress and created a web shop. With the help of UiPath, I made automations for product scraping and order administration in WordPress. 
              </p>
              <p>From time to time, I've been creating WordPress web sites until the present day.</p>
            </div>
          </div>

          <div
          ref={timelineRefthree}
            className={`flex relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblethree ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.2%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">React-Native</h2>
              <h3>2019</h3>
              <p>
              I had an idea to create the app, but Python here does not fit, so I took CS50's Mobile App Development with React Native online courses at HarvardX. 
              </p>
            </div>
          </div>

          <div
          ref={timelineReffour}
          className={`flex flex-row-reverse   relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblefour ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.8%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">Java & C++</h2>
              <h3>2020</h3>
              <p>
              I decided that I needed to grow and learn more about programming, so I began studies at SMK University of Applied Sciences with an emphasis on OOP.
              </p>
            </div>
          </div>

          <div
          ref={timelineReffive}
            className={`flex relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblefive ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.2%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">Android</h2>
              <h3>2022</h3>
              <p>
              This year I spent most of my time learning Android app development. I have created many apps, some public, some not; you can see them in the projects section. 
              </p>
            </div>
          </div>

          <div
          ref={timelineRefsix}
          className={`flex flex-row-reverse   relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblesix ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.8%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">Bachelor Programing & Multimedia</h2>
              <h3>2023</h3>
              <p>
              Graduation at SMK University of Applied Sciences, I got a bachelor's degree in Programing and Multimedia.
              </p>
            </div>
          </div>
        </div>
      <div >
        <h2 className=" pt-2 text-center text-2xl font-extrabold animate-bounce ">I'm ready to be hired!!!🔔</h2>
      </div>
      </div>
      <div       
      className={`flex justify-center items-center  -ml-[20vw] ${myElementIsVisiblesix ? "hidden" : ""}`}>
        <img 
        className=" absolute bottom-3 h-10 animate-bounceOnce     "
        src="./assets/GeneralIcons/wheel_scroll_mouse.svg" alt="" 
        />
      </div>
    </div>
  );
};

export default MyPath;
