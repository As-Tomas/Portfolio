import { useState } from "react";
import avatar from "../../../../public/data/me.jpg";
import About from "./Content/About";
import Technologies from "./Content/Technologies";
import MyPath from "./Content/MyPath/MyPath";
import { Contact } from "./Content/Contact";

const navItems = [
  {
    id: "AboutMe",
    label: "About Me",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1.35rem" viewBox="0 0 640 512">
        <path
          fill="currentColor"
          d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"
        />
      </svg>
    ),
  },
  {
    id: "MyPath",
    label: "My Path",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" viewBox="0 0 640 512">
        <path
          fill="currentColor"
          d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
        />
      </svg>
    ),
  },
  {
    id: "Technologies",
    label: "Technologies",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M500.3 237.1l-192-160A24 24 0 0 0 272 64H64c-35.3 0-64 28.7-64 64V384c0 35.3 28.7 64 64 64H272a24 24 0 0 0 36.3-13.1l192-160a24 24 0 0 0 0-37.8zM288 400H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H288V400zM352 334.2 288 384V128l64 49.8V334.2z"
        />
      </svg>
    ),
  },
  {
    id: "ContactMe",
    label: "Contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3rem" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M448 0H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64C512 28.7 483.3 0 448 0zM160 448H96V240h64V448zM128 208c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32S145.7 208 128 208zM448 448H384V312c0-8.8-7.2-16-16-16s-16 7.2-16 16v136H288V240h64v34.7c17.9-18.5 42.4-34.7 71.4-34.7c56.4 0 100.6 43.1 100.6 108.9V448z"
        />
      </svg>
    ),
  },
];

const palettes = [
  {
    name: "Neon Lagoon",
    description: "Bright aquatic hues for energetic hero areas or interactive states.",
    colors: ["#00f5d4", "#00bbf9", "#8338ec", "#3a0ca3", "#1b1d3c"],
  },
  {
    name: "Aurora Sunset",
    description: "Vibrant twilight mix ideal for call-to-action or feature highlights.",
    colors: ["#f72585", "#ff8906", "#ffd23f", "#8eceff", "#1d1f2f"],
  },
];

const GlassPlate = ({ setContent }) => {
  const [activeComponent, setActiveComponent] = useState("AboutMe");

  const renderComponent = () => {
    switch (activeComponent) {
      case "AboutMe":
        return <About />;
      case "MyPath":
        return <MyPath />;
      case "Technologies":
        return <Technologies />;
      case "ContactMe":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const isActive = (component) =>
    activeComponent === component
      ? "bg-white/20 text-white shadow-[0_18px_40px_rgba(131,56,236,0.35)]"
      : "text-white/70 hover:text-white hover:bg-white/10";

  return (
    <section className="relative">
      <div className="glass-panel emphasis relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(460px 320px at 10% 0%, rgba(0,187,249,0.24), transparent 70%) , radial-gradient(560px 360px at 110% 40%, rgba(131,56,236,0.28), transparent 70%) , radial-gradient(420px 260px at 50% 110%, rgba(255,137,6,0.22), transparent 72%)",
          }}
        />

        <div className="relative grid gap-10 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="flex flex-col gap-8">
            <div className="glass-panel emphasis relative overflow-hidden px-6 py-8 text-center">
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  background:
                    "conic-gradient(from 140deg at 50% 50%, rgba(0,245,212,0.65), rgba(247,37,133,0.58), rgba(131,56,236,0.65))",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <span className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-1.5">
                  <img src={avatar} alt="Tomas Bance" className="h-28 w-28 rounded-full object-cover shadow-[0_15px_35px_rgba(8,12,30,0.45)]" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-wide text-white">Tomas Bance</h3>
                  <p className="text-sm uppercase tracking-[0.32em] text-white/60">Full-Stack Developer</p>
                </div>
                <div className="glass-divider w-full" />
                <p className="text-sm text-white/70 leading-relaxed px-2">
                  Crafting immersive digital journeys with React, Next.js, and a fascination for contemporary
                  glassmorphism.
                </p>
              </div>
            </div>

            <nav className="flex flex-col gap-3 text-sm" aria-label="Profile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center justify-between rounded-2xl border border-white/15 px-5 py-3 transition-all ${isActive(
                    item.id
                  )}`}
                  onClick={() => setActiveComponent(item.id)}
                >
                  <span className="flex items-center gap-3 text-base font-medium">
                    <span className="text-white/70">{item.icon}</span>
                    {item.label}
                  </span>
                  <span className="glass-chip text-[0.7rem] uppercase tracking-widest">
                    {item.id === activeComponent ? "Active" : "View"}
                  </span>
                </button>
              ))}
            </nav>

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 px-6 py-6">
              <div className="absolute inset-x-0 -top-14 mx-auto h-36 w-36 rounded-full bg-[#ff8906]/40 blur-3xl" aria-hidden="true" />
              <div className="relative z-10 flex flex-col gap-4 text-sm text-white/80">
                <h4 className="text-lg font-semibold text-white">Bring the vision to life</h4>
                <p className="leading-relaxed">
                  Explore featured projects with immersive cards, 3D hover motion, and neon callouts. Each case study is
                  wrapped in layered glass and responsive liquid highlights.
                </p>
                <button
                  className="glass-btn w-full justify-center uppercase tracking-[0.2em] text-sm"
                  onClick={() => setContent("projects")}
                >
                  View Projects
                </button>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-8">
            <section className="glass-panel bg-white/10 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 text-white/90 overflow-hidden">
              <div className="absolute -right-16 -top-12 h-48 w-48 rounded-full bg-[#00bbf9]/30 blur-3xl" aria-hidden="true" />
              <div className="relative z-10 space-y-6">{renderComponent()}</div>
            </section>

            <section className="glass-panel bg-white/8 px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
              <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/50">Color stories</p>
                  <h3 className="text-xl font-semibold text-white">Curated palettes</h3>
                </div>
                <span className="glass-chip">Liquid Glass Ready</span>
              </header>

              <div className="grid gap-6 md:grid-cols-2">
                {palettes.map((palette) => (
                  <div
                    key={palette.name}
                    className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.35)]"
                  >
                    <div className="absolute inset-0 opacity-[0.18]" style={{ background: `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[2]})` }} />
                    <div className="relative z-10 flex flex-col gap-5 text-sm text-white/80">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{palette.name}</h4>
                        <p className="leading-relaxed">{palette.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {palette.colors.map((color) => (
                          <span
                            key={color}
                            className="h-8 w-8 rounded-full border border-white/25 shadow-[0_8px_20px_rgba(8,12,30,0.25)]"
                            style={{ background: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassPlate;
