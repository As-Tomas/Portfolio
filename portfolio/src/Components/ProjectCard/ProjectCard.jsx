import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringIco, setIsHoveringIco] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  
  //Moving Animation Event
  const handleMouseMove = (e) => {
    const card = document.querySelector(".card");
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    if (isHovering) {
      card.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      //title.style.transform = ` translateZ(200px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  };

  //Animate In
  const handleMouseEnter = () => {
    const card = document.querySelector(".card");
    const picture = document.querySelector(".picture");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    card.style.transition = "all 0.1s ease";
    picture.style.transform = "translateZ(100px) ";
    title.style.transform = " translateZ(150px) translateY(-100px)";
    description.style.transform = "translateZ(200px) translateY(-100px)";
    setIsHovering(true);
  };

  //Animate Out
  const handleMouseLeave = () => {
    setIsHovering(false);
    const card = document.querySelector(".card");
    const title = document.querySelector(".title");
    const picture = document.querySelector(".picture");
    const description = document.querySelector(".description");
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    picture.style.transition = "all 0.3s ease";
    picture.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transition = "all 0.3s ease";
    title.style.transform = " translateZ(0px) translateY(0px) ";
    description.style.transition = "all 0.3s ease";
    description.style.transform = " translateZ(0px) translateY(0px) ";
  };

  const handleMouseEnterIco = () => {
    setIsHoveringIco(true);
    const ico = document.querySelector(".ico");
    ico.style.transition = "all 0.1s ease";
  };

  const handleMouseLeaveIco = () => {
    setIsHoveringIco(false);
    const ico = document.querySelector(".ico");
    ico.style.transition = "all 0.5s ease";
    ico.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div
        className="container w-1/2 flex justify-center items-center "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="card min-h-[80vh] w-[35rem] px-[5rem] rounded-3xl p-10 shadow-neon_indigo border-2 border-indigo-300 "
          style={{ transformStyle: "preserve-3d" }}                         
          // style={{
          //   transform: isHovering
          //     ? "rotateY(-80deg) rotateX(40deg) "
          //     : "rotateY(0deg) rotateX(0deg)",
          // }}
        >
          <div className="picture min-h-[35vh] flex items-center justify-center">
            <div
              className="circle z-0 w-[15rem] h-[15rem] bg-gradient-to-r from-blue-300 to-red-300  absolute border-2 rounded-full"
              
            ></div>

            <img
              className="z-10 w-[20rem] relative  transition-transform duration-750 ease-out"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div
            className="info text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1
              className="title text-3xl font-bold"
            >
              {project.name}
            </h1>
            <h3
              className="description text-lg py-8 text-gray-600 font-light "
            >
              {project.description}
            </h3>

            <div
              className="ico flex justify-around "
              onMouseEnter={handleMouseEnterIco}
              onMouseLeave={handleMouseLeaveIco}
            >
              {project.technologies.slice(0, 4).map((technology, index) => (
                <img
                  key={index}
                  src={technology}
                  alt={`Tech ${index + 1}`}
                  className={`h-20 w-20 transition-transform ${
                    isHoveringIco && hoveredIndex === index ? "scale-150" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>

            <div className="mt-20">
              <button className="w-full py-4 bg-[#f54642] rounded-full font-bold text-white">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
