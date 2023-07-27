import styles from "./styles.module.css";
import { useEffect, useRef, useCallback  } from 'react';
import { useInView } from 'react-intersection-observer';

const MyPath = () => {

  const { ref:timelineRef, inView: myElementIsVisible } = useInView();
  const { ref:timelineReftwo, inView: myElementIsVisibletwo } = useInView();
  const { ref:timelineRefthree, inView: myElementIsVisiblethree } = useInView();
  const { ref:timelineReffour, inView: myElementIsVisiblefour } = useInView();



  return (
    <div className="body  h-[90vh] w-full overflow-hidden overflow-y-scroll">
      <div className="container p-[2rem] pb-[400px] mx-auto max-w-3xl">
        <div className="topSection text-center py-[4rem] max-w-xl mx-auto">
          <h1>Animated</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
            ad.
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
          className={`flex relative z-10 my-12 p-4 border rounded-2xl items-center min-h-[300px] ${myElementIsVisible ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.3%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2>Web</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quo?
              </p>
            </div>
          </div>

          <div
           ref={timelineReftwo}
            className={`flex flex-row-reverse   relative z-10 my-12 p-4 border rounded-2xl items-center min-h-[300px] ${myElementIsVisibletwo ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[49.7%] top-[20%] transform translate-x-[50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2> Dew</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptate soluta non, illo sapiente exercitationem odio itaque
                molestias voluptatum eaque facilis id repudiandae ex cumque
                nihil dicta voluptatibus fugiat aliquam necessitatibus accusamus
                dolorum obcaecati consequatur quos. Facere eveniet asperiores
                quam dolor?
              </p>
            </div>
          </div>

          <div
          ref={timelineRefthree}
            className={`flex relative z-10 my-12 p-4 border rounded-2xl items-center min-h-[300px] ${myElementIsVisiblethree ? "flex opacity-100   transform translate-x-[0%] transition duration-700 ease-in ":" opacity-0  transform translate-x-[-50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black left-[50.3%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2>Web Dev</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident tenetur aliquid vel quod ex. Exercitationem sequi
                cumque amet error dolor unde qui et fugit, ratione ab? Nihil,
                unde? Fuga deserunt inventore eos id voluptatibus, minima
                officia assumenda saepe laborum molestiae.
              </p>
            </div>
          </div>

          <div
          ref={timelineReffour}
          className={`flex flex-row-reverse   relative z-10 my-12 p-4 border rounded-2xl items-center min-h-[300px] ${myElementIsVisiblefour ? "opacity-100   transform translate-x-[0%] transition duration-700 ease-in":"opacity-0   transform translate-x-[50%] transition duration-700 ease-in "}section `}
          >
            <div className="bead absolute block h-4 w-4 border rounded-full bg-black right-[47.4%] top-[20%] transform translate-x-[-50%]"></div>
            <div className="content w-[calc(50%-2rem)]">
              <h2>Back End</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quo?
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MyPath;
