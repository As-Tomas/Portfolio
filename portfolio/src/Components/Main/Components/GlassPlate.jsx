import { useMemo, useState } from 'react';
import avatar from '../../../../public/data/me.jpg';
import About from './Content/About';
import Technologies from './Content/Technologies';
import MyPath from './Content/MyPath/MyPath';
import { Contact } from './Content/Contact';

const sections = [
  { id: 'AboutMe', label: 'About Me', icon: 'user' },
  { id: 'MyPath', label: 'My Path', icon: 'path' },
  { id: 'Technologies', label: 'Technologies', icon: 'spark' },
  { id: 'ContactMe', label: 'Contact', icon: 'chat' },
];

const iconPaths = {
  user: (
    <path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176z" />
  ),
  path: (
    <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
  ),
  spark: (
    <path d="M32 256L256 32l32 96L480 32 352 256l32 96L160 320 32 256zM80 480l64-128 64 64 192-64-64 128-256 0z" />
  ),
  chat: (
    <path d="M448 0H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H160v96l128-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" />
  ),
};

const GlassPlate = ({ setContent }) => {
  const [activeComponent, setActiveComponent] = useState('AboutMe');

  const ActiveSection = useMemo(() => {
    switch (activeComponent) {
      case 'MyPath':
        return <MyPath />;
      case 'Technologies':
        return <Technologies />;
      case 'ContactMe':
        return <Contact />;
      case 'AboutMe':
      default:
        return <About />;
    }
  }, [activeComponent]);

  return (
    <div className="glass-scroll flex justify-center">
      <div className="glass-surface-strong relative flex w-full max-w-6xl flex-col gap-10 overflow-hidden rounded-[32px] border border-white/25 px-6 py-8 shadow-[0_28px_65px_rgba(12,16,32,0.55)] sm:flex-row sm:px-12 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          aria-hidden
          style={{
            background:
              'radial-gradient(circle at 15% 20%, rgba(0, 245, 212, 0.22), transparent 55%), radial-gradient(circle at 85% 25%, rgba(131, 56, 236, 0.32), transparent 60%), radial-gradient(circle at 30% 85%, rgba(0, 187, 249, 0.25), transparent 60%)',
          }}
        />

        <aside className="flex w-full flex-col gap-6 sm:w-72">
          <div className="glass-surface rounded-[28px] border border-white/20 p-6 text-center shadow-lg">
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-white/30 shadow-lg">
              <img src={avatar} alt="Tomas Bance" className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">Tomas Bance</h3>
            <p className="muted-text text-sm uppercase tracking-[0.35em]">Full-Stack Developer</p>
          </div>

          <nav className="glass-surface rounded-[28px] border border-white/15 p-4 shadow-lg">
            <ul className="flex flex-col gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => setActiveComponent(section.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide transition ${
                      activeComponent === section.id
                        ? 'glass-pill text-white shadow-[0_12px_24px_rgba(8,12,28,0.45)]'
                        : 'text-white/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 text-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-4 w-4 fill-current">
                        {iconPaths[section.icon]}
                      </svg>
                    </span>
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button type="button" className="accent-button w-full" onClick={() => setContent('projects')}>
            View Projects
          </button>
        </aside>

        <section className="glass-scroll glass-surface flex-1 overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(5,8,20,0.52)] px-4 py-4 shadow-lg sm:px-8 sm:py-8">
          {ActiveSection}
        </section>
      </div>
    </div>
  );
};

export default GlassPlate;
