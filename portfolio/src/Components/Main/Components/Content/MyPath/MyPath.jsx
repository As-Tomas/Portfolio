import styles from "./styles.module.css";
import { useEffect, useRef, useCallback  } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPath = () => {

  const { ref:timelineRef, inView: myElementIsVisible } = useInView();
  const { ref:timelineReftwo, inView: myElementIsVisibletwo } = useInView();
  const { ref:timelineRefthree, inView: myElementIsVisiblethree } = useInView();
  const { ref:timelineReffour, inView: myElementIsVisiblefour } = useInView();



  return (
    <div className="mypath  h-full w-full overflow-y-auto ">
      <div className="container p-[2rem] pb-[100px] mx-auto max-w-3xl">
        <div className="topSection text-center py-[1rem] max-w-xl mx-auto">
          <h1 className=" text-3xl">My path</h1>
          <p>
            Here you can see historical my life path how I find my passion an where I'm now.
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
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.3%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)] text-right">
              <h2 className=" text-2xl">Poker</h2>
              <h3>2016 here my pasion began.</h3>
              <p>
                Besides my daily work as office suport at evenings have been playing poker tournaments for many year, each month winings not bad salary supplement. 
                But poker games takes a lot of time, and here came an IDEA, why not to automate my strategyies and save the time?!
                Litle bit of google and found Deep mind pokerbot free source at Github coded by Python and here my pasion began!
              </p>
            </div>
          </div>

          <div
           ref={timelineReftwo}
            className={`flex flex-row-reverse   relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisibletwo ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.7%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl"> WordPress / UiPath</h2>
              <h3>2019</h3>
              <p>
                Found the gap in the local market and drop shiping become wery populars so started to learn WordPress and created web shop.
                With help of UiPath made automations for product scraping and orders administration in WordPress. 
              </p>
            </div>
          </div>

          <div
          ref={timelineRefthree}
            className={`flex relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblethree ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.3%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">React-Native</h2>
              <h3>2019</h3>
              <p>
              Got an idea to create the APP and Phithon here does not fit, so took CS50's Mobile App Development with React Native online couses at HarvardX. 
              </p>
            </div>
          </div>

          <div
          ref={timelineReffour}
          className={`flex flex-row-reverse   relative z-10 my-12 p-4  rounded-2xl items-center min-h-[300px] ${myElementIsVisiblefour ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.7%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2 className=" text-2xl">Studies</h2>
              <h3>2020</h3>
              <p>
              After many hours with Python, decided that I need grow and learn more about programing so began studies at SMK University of Applied Sciences
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MyPath;
