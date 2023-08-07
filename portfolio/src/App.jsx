import { useState, useCallback } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


function App() {
  const [content, setContent] = useState("about");

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
  await console.log(container);
}, []);

  return (
    <>
      <div
      id="particles-js"
        className="initial relative  "
        //  style={{ 
        //   backgroundImage: `url(https://img.freepik.com/free-vector/abstract-blue-red-paper-cut-background-with-simple-shapes_8829-2520.jpg?w=1060&t=st=1690130003~exp=1690130603~hmac=be02e42313763296a7b2ca027bcf900b6d9d9fd851af8b294c959deb49b04d26)`,
        //   backgroundRepeat: "no-repeat",
        //       backgroundSize: "cover",
        //       backgroundPosition: "center center",
        //       boxSizing: "border-box",
        //  }}
      >
        <Header setContent={setContent} />
        <div className="pt-20 z-10 relative  ">
          <Main content={content} />
        </div>
        <Footer />
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
            options={{
                background: {
                    
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

        
      </div>
    </>
  );
}

export default App;
