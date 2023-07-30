import { useState } from "react";
import tempPic from "../../../data/DSC_8258_40.svg";
import avatar from "../../../data/me.jpg";
import About from "./Content/About";
import MySkills from "./Content/MySkills";
import Technologies from "./Content/Technologies";
import MyPath from "./Content/MyPath/MyPath";

const GlassPlate = () => {
  const [activeComponent, setIsComponent] = useState('AboutMe');

  const toggleComponent = (component) => {
    setIsComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "AboutMe":
        return <About />;
      case "MySkills":
        return <MySkills />;
      case "MyPath":
        return <MyPath />;
      case "Technologies":
        return <Technologies />;
      case "ContactMe":
        // return <ContactMe />; Uncomment this once you have the ContactMe component
        return <MySkills />;
      default:
        return <About />;
    }
  };

  const isActive = (component) => activeComponent === component ? 'underline decoration-4 decoration-pink-500 bg-slate-200  ' : '';


  return (
    <div
      className="body-card-div flex items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div className="container min-h-[70vh] h-full w-full  flex justify-center items-center ">
        <div
          className="card w-full h-full max-h-full max-w-full bg-gradient-to-br backdrop-blur-md from-[rgba(255,255,255,0.7)] to--[rgba(255,255,255,0.3)] 
          rounded-2xl before:rounded-2xl before:block before:absolute  "
          style={{ transformStyle: "preserve-3d" }}
          // style={{
          //   transform: isHovering
          //     ? "rotateY(-80deg) rotateX(40deg) "
          //     : "rotateY(0deg) rotateX(0deg)",
          // }}
        >
          <section
            className="card rounded-2xl shadow-neon_indigo flex "
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
              className="dashboard px-20 flex-1 flex flex-col items-center justify-evenly rounded-2xl before:rounded-2xl before:block before:absolute
             bg-gradient-to-br backdrop-blur-md from-[rgba(255,255,255,0.7)] to--[rgba(255,255,255,0.3)]"
            >
              <div className="user mx-6 flex flex-col items-center justify-evenly ">
                <img
                  src={avatar}
                  alt="Tomas Bance"
                  className=" w-1/3 h-1/9  rounded-full"
                />
                <h3 className=" font-bold">Tomas Bance</h3>
                <p>Portfolio</p>
              </div>
              <div className="links flex flex-col">
                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${ isActive("AboutMe")}`}
                  onClick={() => toggleComponent("AboutMe")}
                >
                  <img className=" h-7" src=".\src\assets\staticSvg\search.svg" alt="" />
                  <h2>About Me</h2>
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${ isActive("MyPath")}`}
                  onClick={() => toggleComponent("MyPath")}
                >
                  <img className=" h-7" src=".\src\assets\staticSvg\search.svg" alt="" />
                  <h2>My Path</h2>
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${ isActive("MySkills")}`}
                  onClick={() => toggleComponent("MySkills")}
                >
                  <img className=" h-7" src=".\src\assets\staticSvg\search.svg" alt="" />
                  <h2>My Skills</h2>
                </button>

                <button
                  className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${ isActive("Technologies")}`}
                  onClick={() => toggleComponent("Technologies")}
                >
                  <img className=" h-7" src=".\src\assets\staticSvg\search.svg" alt="" />
                  <h2>Tools I Use</h2>
                </button>
              </div>
              <button
                className={`flex whitespace-nowrap rounded-lg py-1 px-2 ${ isActive("ContactMe")}`}
                onClick={() => toggleComponent("ContactMe")}
              >
                <img className=" h-7" src=".\src\assets\staticSvg\search.svg" alt="" />
                <h2>Contact Me</h2>
              </button>
            </div>
            <div className="content flex-auto">
            {renderComponent()}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GlassPlate;
