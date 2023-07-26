import tempPic from "../../../data/DSC_8258_40.svg";
import PieChartDevelopment from "./Charts/Pie-Chart_Development";

const GlassPlate = () => {
  return (
    <div
      className="body-card-div flex items-center justify-center "
      // style={{ perspective: "800px" }}
    >
      <div className="container min-h-[70vh] h-full w-full  flex justify-center items-center ">
        <div
          className="card w-full h-full  bg-gradient-to-br backdrop-blur-md from-[rgba(255,255,255,0.7)] to--[rgba(255,255,255,0.3)] 
          rounded-2xl before:rounded-2xl before:block before:absolute  "
          style={{ transformStyle: "preserve-3d" }}
          // style={{
          //   transform: isHovering
          //     ? "rotateY(-80deg) rotateX(40deg) "
          //     : "rotateY(0deg) rotateX(0deg)",
          // }}
        >
          <div
            className="card h-screen rounded-2xl shadow-neon_indigo text-[#ffffff] "
            style={{
              transformStyle: "preserve-3d",
              backgroundImage: `url(${tempPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <h1> tekt</h1>
            <PieChartDevelopment/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassPlate;
