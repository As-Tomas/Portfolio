import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
//import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

function App() {
  const [content, setContent] = useState("about");
  const [theme, setTheme] = useState("lagoon");

  useEffect(() => {
    if (theme === "aurora") {
      document.documentElement.setAttribute("data-theme", "aurora");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "lagoon" ? "aurora" : "lagoon"));
  };

//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     //await loadFull(engine);
//     //https://vincentgarreau.com/particles.js/
//     await loadSlim(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//   await console.log(container);
// }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="floating-sphere"
        style={{
          width: "38rem",
          height: "38rem",
          background: "radial-gradient(circle at 30% 30%, var(--accent-100), transparent 65%)",
          top: "-14rem",
          left: "-12rem",
        }}
      />
      <div
        className="floating-sphere"
        style={{
          width: "30rem",
          height: "30rem",
          background: "radial-gradient(circle at 70% 20%, var(--accent-300), transparent 70%)",
          bottom: "-12rem",
          right: "-10rem",
        }}
      />
      <div
        className="floating-sphere"
        style={{
          width: "22rem",
          height: "22rem",
          background: "radial-gradient(circle at 50% 50%, var(--accent-200), transparent 60%)",
          top: "50%",
          right: "55%",
        }}
      />
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-10 xl:px-16">
        <Header
          setContent={setContent}
          onToggleTheme={toggleTheme}
          activeTheme={theme}
          activeContent={content}
        />
        <main className="relative flex-1 pt-28 pb-32">
          <Main content={content} setContent={setContent} />
        </main>
        <Footer />
        {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
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
                            quantity: 1,
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
                        speed: 1,
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
                        value: { min: 2, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        /> */}

      </div>
    </div>
  );
}

export default App;
