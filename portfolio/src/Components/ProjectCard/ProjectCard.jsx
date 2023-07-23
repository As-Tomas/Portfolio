import PropTypes from "prop-types";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imgPreviewIndex, setImgPreviewIndex] = useState(null);
  const [imgBorders, setimgBorders] = useState("");
  
  // Preview image positions
  const translations = [[0],[-100, 100],[-170, -10, 170]];
  const hoverTranslations = [[0],[-100, 100],[-150, -10, 150]];

  //Moving Animation Event for card 
  // const handleMouseMove = (e) => {
  //   const card = document.querySelector(".card");
  //   const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  //   const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  //   if (isHovering) {
  //     card.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;      
  //   }
  // };
  const handleMouseMove = (e) => {
    const bodyCardDiv = document.querySelector(".body-card-div");
    const card = document.querySelector(".card");
    const rect = bodyCardDiv.getBoundingClientRect();

    const xAxis = (rect.width / 2 - (e.pageX - rect.left)) / 25;
    const yAxis = ((rect.height / 0.8 - (e.pageY - rect.top)) / 25)* -1;

    if (isHovering) {
      card.style.transform = `perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      //console.log(`perspective(800px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
    }
  };

  //Animate In
  const handleMouseEnter = () => {
    setIsHovering(true);    
    setimgBorders("shadow-neon_purple");
    
    const card = document.querySelector(".card");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");
    const ico = document.querySelector(".ico");
    const buttons = document.querySelector(".buttons");
    
    card.style.transition = "all 0.1s ease";
    title.style.transform = " translateZ(150px) translateY(-20px)";
    description.style.transform = "translateZ(200px) translateY(-20px)";
    ico.style.transform = "translateZ(180px) translateY(-20px)";
    buttons.style.transform = "translateZ(170px) translateY(-25px)";

    //for pictures
    const parentElement = document.querySelector(".pictures");
    if (parentElement) {
      const imgElements = parentElement.querySelectorAll("img");
      const childCount = imgElements.length;
     //console.log("Number of children:", childCount);
     //console.log("translations[i]:", translations[childCount-1][1]);
      if (imgElements.length >= 0) {
        //console.log("translations:", translations);
        //console.log("translations[i]:", translations[childCount-1][0]);

        imgElements.forEach((imgElement, i) => {
          imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(-50px) translateX(${translations[childCount-1][i]}px)`;
          //console.log("translations[i]:", translations[childCount-1][i]);
        });

      } 
    } 
  };

  //Animate Out
  const handleMouseLeave = () => {
    setIsHovering(false);
    setimgBorders(null);
    const card = document.querySelector(".card");
    const title = document.querySelector(".title");
    const pictures = document.querySelector(".pictures");
    const description = document.querySelector(".description");
    const ico = document.querySelector(".ico");
    const buttons = document.querySelector(".buttons");

    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    pictures.style.transition = "all 0.3s ease";
    title.style.transition = "all 0.3s ease";
    title.style.transform = " translateZ(0px) translateY(0px) ";
    description.style.transition = "all 0.3s ease";
    description.style.transform = " translateZ(0px) translateY(0px) ";
    ico.style.transition = "all 0.3s ease";
    ico.style.transform = "translateZ(0px) translateY(0px)";
    buttons.style.transition = "all 0.3s ease";
    buttons.style.transform = "translateZ(0px) translateY(0px)";

    //for pictures
      const parentElement = document.querySelector(".pictures");
      if (parentElement) {
        const imgElements = parentElement.querySelectorAll("img");
        if (imgElements.length >= 0) {  
          imgElements.forEach((imgElement) => {
            imgElement.style.transform = "translateZ(0px) translateY(0px) translateX(0px)";
          });  
        } 
      } 
  };

  const handleMouseLeaveIco = () => {
    const ico = document.querySelector(".ico");
    ico.style.transition = "all 0.5s ease";
    ico.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleMouseEnterPreviewImg = (index) => {
    setImgPreviewIndex(index);
    //console.log("index:", imgPreviewIndex);

    const parentElement = document.querySelector(".pictures");
    if (parentElement) {
      const imgElements = parentElement.querySelectorAll("img");
      const childCount = imgElements.length;
      if (imgElements.length > 0) {

        imgElements.forEach((imgElement, i) => {
          if (index === i) {
            imgElement.style.transform = `translateZ(220px) translateY(0px) translateX(${hoverTranslations[childCount-1][i]}px) scale(1.2) rotateX(15deg)`;  
            //console.log("translated:", hoverTranslations[childCount-1][i]);     
          } else {
            imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(-100px) translateX(${translations[childCount-1][i]}px)`;            
          }
        });

      } 
    } 
  };
  const handleMouseLeavePreviewImg = () => {
    setImgPreviewIndex(null);
    const parentElement = document.querySelector(".pictures");
      if (parentElement) {
        const imgElements = parentElement.querySelectorAll("img");
        const childCount = imgElements.length;
        if (imgElements.length > 0) {  
          imgElements.forEach((imgElement, i) => {
            imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(-50px) translateX(${translations[childCount-1][i]}px)`;
          });  
        } 
      } 
  };

  return (
    <div
      className="body-card-div flex items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div
        className="container min-h-[70vh] w-1/2 flex justify-center items-center  "
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="card  w-[35rem] px-[3rem] py-[1rem] rounded-3xl shadow-neon_indigo border-2 border-indigo-300  bg-[rgba(255,255,255,0.1)]  "
          style={{ transformStyle: "preserve-3d" }}
          // style={{
          //   transform: isHovering
          //     ? "rotateY(-80deg) rotateX(40deg) "
          //     : "rotateY(0deg) rotateX(0deg)",
          // }}
        >
          <div
            className="pictures min-h-[25vh] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
            //onMouseEnter={handleMouseEnterPreviewImg}
          >
            {/* <div className="circle   z-auto w-[15rem] h-[15rem] bg-gradient-to-r from-blue-300 to-red-300 absolute border-2 rounded-full"></div> */}            

            {project.images.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image ${index + 1}`}
                className={`border-1 border-purple-300  rounded-lg absolute  w-[12rem] transition-transform duration-750 ease-out ${imgBorders} ${
                  imgPreviewIndex === index ? "shadow-neon_blue border-blue-400 " : ""
                }
                  ${index === 0 ? `imgPrev${index} shadow-neon_purple` : `imgPrev${index} `}`}
                onMouseEnter={() => handleMouseEnterPreviewImg(index)}
                onMouseLeave={() => handleMouseLeavePreviewImg()}
              />
            ))}
          </div>
          <div
            className="info text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="title text-3xl font-bold">{project.name}</h1>
            <h3 className="description text-sm  py-8 text-gray-600 font-light ">
              {project.description}
            </h3>

            <div
              className="ico flex justify-around "
              onMouseLeave={handleMouseLeaveIco}
            >
              {project.technologies.slice(0, 4).map((technology, index) => (
                <img
                  key={index}
                  src={technology}
                  alt={`Tech ${index + 1}`}
                  className={`h-[3rem] w-[3rem] transition-transform ${
                    hoveredIndex === index ? "scale-150" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>

            <div className="buttons mt-10">
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
