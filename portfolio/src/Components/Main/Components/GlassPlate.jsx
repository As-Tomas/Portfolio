import { useState } from "react";
import tempPic from "../../../../public/data/DSC_8258_40.svg";
import avatar from "../../../../public/data/me.jpg";
import About from "./Content/About";
import Technologies from "./Content/Technologies";
import MyPath from "./Content/MyPath/MyPath";
import { Contact } from "./Content/Contact";


const GlassPlate = () => {
  const [activeComponent, setIsComponent] = useState("AboutMe");

  const toggleComponent = (component) => {
    setIsComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "AboutMe":
        return <About />;
      case "MyPath":
        return <MyPath />;
      case "Technologies":
        return <Technologies />;
      case "ContactMe":
        // return <ContactMe />; Uncomment this once you have the ContactMe component
        return <Contact />;
      default:
        return <About />;
    }
  };

  const isActive = (component) =>
    activeComponent === component
      ? "underline decoration-4 decoration-pink-500 "
      : "";

  return (
    <div
      className="body-card-div h-full w-full flex  items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div className="container h-[75vh]  w-[90vw] max-w-[1400px]  ">
        <div
          className="card h-[73vh]  max-w-[90vw] backdrop-blur-md 
          rounded-2xl before:rounded-2xl before:block before:absolute   "
          style={{ transformStyle: "preserve-3d" }}
          // style={{
          //   transform: isHovering
          //     ? "rotateY(-80deg) rotateX(40deg) "
          //     : "rotateY(0deg) rotateX(0deg)",
          // }}
        >
          <section
            className="card h-full  rounded-2xl shadow-neon_indigo flex "
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: `url(${tempPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              boxSizing: "border-box",
            }}
          >
            <div
              className="dashboard px-1 max-w-xs  sm:px-10 lg:px-20 flex-1 flex flex-col items-center justify-evenly  space-y-10 text-base lg:text-lg  rounded-2xl before:rounded-2xl before:block before:absolute
             bg-gradient-to-br  from-[rgba(255,255,255,0.7)] to--[rgba(255,255,255,0.3)]"
            >
              <div className="me  mx-auto flex flex-col items-center justify-evenly ">
                <img
                  src={avatar}
                  alt="Tomas Bance"
                  className=" w-2/3 h-3/9  rounded-lg "
                />
                <h3 className=" font-bold"> Tomas Bance</h3>
                <h4 className="text-center ">Full-Stack Developer</h4>
              </div>

              <div className="links flex flex-col">
                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${isActive(
                    "AboutMe"
                  )}`}
                  onClick={() => toggleComponent("AboutMe")}
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.5rem"
                      viewBox="0 0 576 512"
                    >
                      <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" />
                    </svg>
                  </div>

                  <h2>About Me</h2>
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${isActive(
                    "MyPath"
                  )}`}
                  onClick={() => toggleComponent("MyPath")}
                >                  
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.5rem"
                      viewBox="0 0 640 512"
                    >
                      <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>
                  </div>
                  <h2>My Path</h2>
                </button>                

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${isActive(
                    "Technologies"
                  )}`}
                  onClick={() => toggleComponent("Technologies")}
                >
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.5rem"
                      viewBox="0 0 512 512"
                    >
                      <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                    </svg>
                  </div>
                  <h2>Tools I Use</h2>
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 `}
                >
                  <div className="mr-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="1.5rem" 
                      viewBox="0 0 512 512"
                    >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                  </div>
                  <a href="https://no.linkedin.com/in/tomas-bancevicius" target="_blank" rel="noreferrer">
                    <h2>LinkedIn</h2>
                  </a>              
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 `}
                >
                  <div className="mr-2">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="1.5rem" 
                    viewBox="0 0 496 512"
                    >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                  </div>
                  <a href="https://github.com/As-Tomas" target="_blank" rel="noreferrer">
                    <h2>GitHub</h2>
                  </a>
                </button>

                

              </div>

              <button
                className={` hidden flex whitespace-nowrap rounded-lg py-1 px-2 ${isActive(
                  "ContactMe"
                )}`}
                onClick={() => toggleComponent("ContactMe")}
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5rem"
                    viewBox="0 0 512 512"
                  >
                    <path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
                  </svg>
                </div>
                <h2>Contact Me</h2>
              </button>
              
            </div>
            <div className="content ">{renderComponent()}</div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GlassPlate;
