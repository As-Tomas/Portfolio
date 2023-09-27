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
    const yAxis = ((rect.height / 2 - (e.pageY - rect.top)) / 25)* -1;


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
    // const title = document.querySelector(".title");
    // const description = document.querySelector(".description");
    // const ico = document.querySelector(".ico");
    // const buttons = document.querySelector(".buttons");
    
    card.style.transition = "all 0.1s ease";
    // title.style.transform = " translateZ(150px) translateY(-20px)";
    // description.style.transform = "translateZ(200px) translateY(-20px)";
    // ico.style.transform = "translateZ(180px) translateY(-20px)";
    // buttons.style.transform = "translateZ(170px) translateY(-25px)";
    

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
          imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(100px) translateX(${translations[childCount-1][i]}px)`;
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
            imgElement.style.transform = `translateZ(320px) translateY(150px) translateX(${hoverTranslations[childCount-1][i]}px) scale(1.2)`;  
            //console.log("translated:", hoverTranslations[childCount-1][i]);     
          } else {
            imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(100px) translateX(${translations[childCount-1][i]}px)`;            
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
            imgElement.style.transform = `translateZ(1${childCount-i}0px) translateY(0px) translateX(${translations[childCount-1][i]}px)`;
          });  
        } 
      } 
  };

  const lastHaveShadow = project.images.length - 1;

  return (
    <div
      className="body-card-div flex items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div
        className="container min-h-[70vh] w-5/12 sm:w-6/12 flex justify-center items-center "
        // onMouseMove={handleMouseMove}
        style={{perspective: "800px"}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="card w-[55rem] px-[3rem] py-[1rem]   before:rounded-3xl before:block before:absolute before:-inset-1 before:backdrop-blur-md"
          style={{ transformStyle: "preserve-3d",  }}
          
        >
          <div className={`card ${window.innerHeight < 860 ? "min-h-[70vh] -mx-12 -my-0 ":"-mx-12 -my-4"}  rounded-3xl border-2 border-indigo-500 shadow-neon_indigo bg-[rgba(255,255,255,0.1)`}
          style={{ transformStyle: "preserve-3d", }}>

          <div
            className={`pictures ${window.innerHeight < 860 ? " min-h-[25vh]":" min-h-[25vh]"} pt-14 flex items-center justify-center`}
            style={{ transformStyle: "preserve-3d" }}
            //onMouseEnter={handleMouseEnterPreviewImg}
          >
            {/* <div className="circle   z-auto w-[15rem] h-[15rem] bg-gradient-to-r from-blue-300 to-red-300 absolute border-2 rounded-full"></div> */}            

            
            {project.images.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image ${index + 1}`}
                // ${window.innerHeight < 860 ? " max-w-[8rem] max-h-[10rem]":" max-w-[12rem] max-h-[14rem]"}
                className={`border-1 border-purple-300 rounded-lg absolute max-w-[12rem] max-h-[14rem]  transition-transform duration-750 ease-out ${imgBorders} ${
                  imgPreviewIndex === index ? "shadow-neon_blue border-blue-400 " : ""
                }
                  ${index === lastHaveShadow ? `imgPrev${index} shadow-neon_purple` : `imgPrev${index} `}`}
                onMouseEnter={() => handleMouseEnterPreviewImg(index)}
                onMouseLeave={() => handleMouseLeavePreviewImg()}
              />
            ))}
          </div>
          <div
            className="info pt-14 text-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className={`title font-bold ${window.innerHeight < 860 ? " text-2xl":" text-3xl"}`}  >{project.name}</h1>
            <h3 className={`description py-6 px-2 text-gray-950 font-normal  ${window.innerHeight < 860 ? " text-lg ":" text-lg "}`}
            style={{
              textIndent: "2em",
              textAlign: "justify",
              textJustify: "inter-word",
              textAlignLast: "left",
            }} >
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
                  className={` ${window.innerHeight < 860 ? " h-[2.5rem]":" h-[3rem]"} transition-transform ${
                    hoveredIndex === index ? "scale-150" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>

            <div className="buttons mt-10 mb-2">
            {project.links.slice(0, 4).map((link, index) => (
                  <button 
                      key={index} 
                      className="w-2/3 py-4 bg-[#f54642] rounded-full font-bold text-white hover:scale-105 hover:bg-[#f82824] transition-all" 
                      onClick={() => window.open(link, '_blank')}
                  >
                      GitHub
                  </button>
              ))}

              {/* <button className="w-2/3 py-4 bg-[#f54642] rounded-full font-bold text-white hover:scale-105 hover:bg-[#f82824] transition-all">
                GitHub
              </button> */}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {};

export default ProjectCard;
