import { useState } from "react";
import tempPic from "../../../../public/data/DSC_8258_40.svg";
import avatar from "../../../../public/data/me.jpg";
import About from "./Content/About";
import Technologies from "./Content/Technologies";
import MyPath from "./Content/MyPath/MyPath";


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
        return <About />;
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
          className="card h-[73vh]  max-w-[90vw]
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
              className="dashboard px-1 sm:px-10 lg:px-20 flex-1 flex flex-col items-center justify-evenly  space-y-10 text-base lg:text-lg  rounded-2xl before:rounded-2xl before:block before:absolute
             bg-gradient-to-br backdrop-blur-md from-[rgba(255,255,255,0.7)] to--[rgba(255,255,255,0.3)]"
            >
              <div className="me  mx-auto flex flex-col items-center justify-evenly ">
                <img
                  src={avatar}
                  alt="Tomas Bance"
                  className=" w-1/3 h-1/9  rounded-full"
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
              </div>
              <button
                className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${isActive(
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
