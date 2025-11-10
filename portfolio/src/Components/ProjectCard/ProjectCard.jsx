import PropTypes from "prop-types";
import { useState } from "react";
import React from 'react';



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
    <div className="body-card-div flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="container min-h-[60vh] w-full max-w-5xl flex justify-center items-center"
        style={{ perspective: "800px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card w-full px-4 py-4 sm:px-6 sm:py-6 before:rounded-3xl before:block before:absolute before:-inset-1" style={{ transformStyle: "preserve-3d" }}>
          <div className="card min-h-[60vh] rounded-3xl border-2 border-white/20 bg-white/10 shadow-neon_indigo px-4 py-6 sm:px-10 sm:py-10" style={{ transformStyle: "preserve-3d" }}>
            <div
              className="pictures min-h-[20vh] sm:min-h-[25vh] pt-6 flex flex-wrap items-center justify-center gap-6"
              style={{ transformStyle: "preserve-3d" }}
            >
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
            <div className="info pt-10 text-center text-white" style={{ transformStyle: "preserve-3d" }}>
              <h1 className="title text-2xl sm:text-3xl font-semibold tracking-wide">{project.name}</h1>
              <h3
                className="description py-6 px-2 sm:px-4 text-white/75 leading-relaxed text-base sm:text-lg"
                style={{
                  textIndent: "2em",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  textAlignLast: "left",
                }}
              >
                {project.description.split('\n').map((line, idx) => (
                  <div key={idx} style={{ textIndent: "2em" }}>
                    {line}
                    <br />
                  </div>
                ))}
              </h3>

              <div className="ico flex flex-wrap justify-center gap-4 sm:gap-6" onMouseLeave={handleMouseLeaveIco}>
              {project.technologies.slice(0, 4).map((technology, index) => (
                <span
                  key={index}
                  className={`flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_20px_45px_rgba(12,16,48,0.35)] transition-transform ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={technology}
                    alt={`Tech ${index + 1}`}
                    className={`${window.innerHeight < 860 ? "h-9 w-9" : "h-11 w-11"} object-contain`}
                  />
                </span>
              ))}
            </div>

              <div className="buttons mt-8 mb-2 flex flex-col items-center gap-4">
              {project.links.slice(0, 4).map((link, index) => (
                <button
                  key={index}
                  className="w-full sm:w-2/3 rounded-full bg-gradient-to-r from-[#f72585] via-[#ff8906] to-[#ffd23f] py-4 font-semibold text-white shadow-[0_20px_45px_rgba(12,16,48,0.35)] transition-transform hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
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
