import PropTypes from "prop-types";
import { useState } from "react";


const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/2 flex justify-center items-center">
        <div
          className={`transform preserve-3d min-h-[80vh] w-[35rem] rounded-3xl p-10 shadow-md ${
            isHovering ? "transition-none" : "transition-all duration-500 ease-out"
          }`}
          style={{
            transform: isHovering
              ? "rotateY(-10deg) rotateX(5deg)"
              : "rotateY(10deg) rotateX(0deg)",
          }}
        >
          <div className="min-h-[35vh] flex items-center justify-center">
            <div
              className="w-[20rem] relative z-2 transition-transform duration-750 ease-out"
              style={{
                transform: isHovering
                  ? "translateZ(200px) rotateZ(-45deg)"
                  : "translateZ(0px) rotateZ(0deg)",
              }}
            >
              <img src="./src/data/adidas.png" alt="adidas" />
            </div>
            <div
              className="w-[15rem] h-[15rem] bg-gradient-to-r from-[rgba(245, 70, 66, 0.75)] to-[rgba(8, 83, 156, 0.75)] absolute border-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1"
              style={{
                transform: isHovering ? "translateZ(150px)" : "translateZ(0px)",
              }}
            ></div>
          </div>
          <div className="text-center">
            <h1
              className={`text-3xl font-bold ${
                isHovering ? "transform translateZ(125px)" : "transform translateZ(0px)"
              }`}
            >
              Adidas ZX
            </h1>
            <h3
              className={`text-lg py-8 text-gray-600 font-light ${
                isHovering ? "transform translateZ(100px)" : "transform translateZ(0px)"
              }`}
            >
              FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.
            </h3>
            <div
              className={`flex justify-between ${
                isHovering ? "transform translateZ(75px)" : "transform translateZ(0px)"
              }`}
            >
              <button className="py-2 px-8 bg-transparent border-2 border-[#585858] rounded-full font-bold text-[#585858] hover:bg-[#585858] hover:text-white focus:outline-none">
                39
              </button>
              <button className="py-2 px-8 bg-transparent border-2 border-[#585858] rounded-full font-bold text-[#585858] hover:bg-[#585858] hover:text-white focus:outline-none">
                40
              </button>
              <button className="py-2 px-8 bg-[#585858] rounded-full font-bold text-white">
                42
              </button>
              <button className="py-2 px-8 bg-transparent border-2 border-[#585858] rounded-full font-bold text-[#585858] hover:bg-[#585858] hover:text-white focus:outline-none">
                44
              </button>
            </div>
            <div className="mt-20">
              <button className="w-full py-4 bg-[#f54642] rounded-full font-bold text-white">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    

      {/* <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Price: ${project.price}</p>
      <p>Category: {project.category}</p> */}
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
