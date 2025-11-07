import { useState } from 'react';
import avatar from '../../../../public/data/me.jpg';
import About from './Content/About';
import Technologies from './Content/Technologies';
import MyPath from './Content/MyPath/MyPath';
import { Contact } from './Content/Contact';

const iconPaths = {
  about: (
    <path
      fill='currentColor'
      d='M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z'
    />
  ),
  path: (
    <path
      fill='currentColor'
      d='M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'
    />
  ),
  technologies: (
    <path
      fill='currentColor'
      d='M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z'
    />
  ),
  contact: (
    <path
      fill='currentColor'
      d='M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm0 64H448L256 256 64 128zm0 96 144.4 115.5c28 22.4 67.2 22.4 95.2 0L448 224V384H64V224z'
    />
  ),
};

const navItems = [
  { id: 'AboutMe', label: 'About Me', icon: 'about' },
  { id: 'MyPath', label: 'My Path', icon: 'path' },
  { id: 'Technologies', label: 'Technologies', icon: 'technologies' },
  { id: 'ContactMe', label: 'Contact', icon: 'contact' },
];

const GlassPlate = ({ setContent }) => {
  const [activeComponent, setActiveComponent] = useState('AboutMe');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'AboutMe':
        return <About />;
      case 'MyPath':
        return <MyPath />;
      case 'Technologies':
        return <Technologies />;
      case 'ContactMe':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const isActive = component =>
    activeComponent === component
      ? 'relative overflow-hidden aurora-ring text-white border-transparent'
      : 'relative overflow-hidden border border-white/15 text-white/70 hover:text-white hover:bg-white/10';

  return (
    <section className='relative w-full'>
      <div className='glass-panel emphasis relative mx-auto w-full max-w-full overflow-visible px-4 py-8 sm:px-6 sm:py-10 lg:mx-0 lg:max-w-none lg:px-12 lg:py-12'>
        <div
          className='pointer-events-none absolute inset-0 opacity-70 rounded-[inherit]'
          aria-hidden='true'
          style={{
            background: 'radial-gradient(460px 320px at 10% 0%, rgba(0,187,249,0.24), transparent 70%) , radial-gradient(560px 360px at 110% 40%, rgba(131,56,236,0.28), transparent 70%) , radial-gradient(420px 260px at 50% 110%, rgba(255,137,6,0.22), transparent 72%)',
          }}
        />

        <div className='relative grid w-full grid-cols-1 gap-4 md:grid-cols-[minmax(160px,200px)_minmax(0,1fr)] lg:grid-cols-[minmax(180px,220px)_minmax(0,1fr)] xl:grid-cols-[minmax(220px,260px)_minmax(0,1fr)]'>
          <aside className='flex w-full flex-col gap-4 md:gap-5'>
            <div className='glass-panel emphasis relative overflow-hidden px-3 py-5 text-center md:text-left'>
              <div
                className='absolute inset-0 opacity-[0.15]'
                style={{
                  background: 'conic-gradient(from 140deg at 50% 50%, rgba(0,245,212,0.65), rgba(247,37,133,0.58), rgba(131,56,236,0.65))',
                }}
              />
              <div className='relative z-10 flex flex-col items-center gap-3 md:items-start md:gap-4'>
                <span className='inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-1'>
                  <img src={avatar} alt='Tomas Bance' className='h-24 w-26 md:h-26 md:w-26 rounded-full object-cover shadow-[0_15px_35px_rgba(8,12,30,0.45)]' />
                </span>
                <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                  <h3 className='text-lg md:text-xl font-semibold tracking-wide text-white'>Tomas Bance</h3>
                  <p className='text-xs md:text-sm uppercase tracking-[0.28em] text-white/60'>Full-Stack Developer</p>
                </div>
                <div className='glass-divider w-full' />
                <p className='px-1 text-xs text-white/70 md:px-0 md:text-sm md:text-left md:leading-relaxed text-center'>Crafting immersive digital journeys with React, React Native and Next.js.</p>
              </div>
            </div>

            <nav className='flex flex-col gap-1.5 md:gap-2 text-[0.7rem] md:text-sm' aria-label='Profile navigation'>
              {navItems.map(item => (
                <button
                  key={item.id}
                  className={`flex w-full items-center gap-2 md:gap-3 rounded-2xl px-3 md:px-5 py-2 md:py-3 transition-all ${isActive(item.id)}`}
                  onClick={() => setActiveComponent(item.id)}
                >
                  <span className='text-white h-4 w-4 md:h-5 md:w-5 [&>svg]:h-full [&>svg]:w-full'>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' className='h-full w-full fill-current'>
                      {iconPaths[item.icon]}
                    </svg>
                  </span>
                  <span className='text-xs md:text-sm lg:text-base font-medium'>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className='flex flex-col gap-2 md:gap-3'>
              <a href='https://no.linkedin.com/in/tomas-bancevicius' target='_blank' rel='noreferrer'>
                <button className='flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/8 px-3 md:px-4 py-2.5 md:py-3 text-white/70 transition-colors hover:text-white hover:bg-white/15'>
                  <span className='flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium'>
                    <span className='text-white h-5 w-5 md:h-6 md:w-6 [&>svg]:h-full [&>svg]:w-full'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='1.4rem' viewBox='0 0 640 512' fill='#ffffff'>
                        <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' />
                      </svg>
                    </span>
                    LinkedIn
                  </span>
                  <span className='text-white/60'>
                    <svg className='pl-[2px]' xmlns='http://www.w3.org/2000/svg' height='0.9rem' viewBox='0 0 60 60' fill='#ffffff'>
                      <path d='M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z' />
                      <path d='M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z' />
                    </svg>
                  </span>
                </button>
              </a>

              <a href='https://github.com/As-Tomas' target='_blank' rel='noreferrer'>
                <button className='flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/8 px-3 md:px-4 py-2.5 md:py-3 text-white/70 transition-colors hover:text-white hover:bg-white/15'>
                  <span className='flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium'>
                    <span className='text-white h-5 w-5 md:h-6 md:w-6 [&>svg]:h-full [&>svg]:w-full'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='1.4rem' viewBox='0 0 640 512' fill='currentColor'>
                        <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
                      </svg>
                    </span>
                    GitHub
                  </span>
                  <span className='text-white/60'>
                    <svg className='pl-[2px]' xmlns='http://www.w3.org/2000/svg' height='0.9rem' viewBox='0 0 60 60' fill='#ffffff'>
                      <path d='M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z' />
                      <path d='M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z' />
                    </svg>
                  </span>
                </button>
              </a>

              <a href='https://drive.google.com/file/d/1gwvlFMkye-hDHtL3LFysYWMBmtQH9eIp/view?usp=drive_link' target='_blank' rel='noreferrer'>
                <button className='flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/8 px-3 md:px-4 py-2.5 md:py-3 text-white/70 transition-colors hover:text-white hover:bg-white/15'>
                  <span className='flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium'>
                    <span className='text-white h-5 w-5 md:h-6 md:w-6 [&>svg]:h-full [&>svg]:w-full'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 640 512' fill='currentColor'>
                        <path d='M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z' />
                      </svg>
                    </span>
                    CV
                  </span>
                  <span className='text-white/60'>
                    <svg className='pl-[2px]' xmlns='http://www.w3.org/2000/svg' height='0.9rem' viewBox='0 0 60 60' fill='#ffffff'>
                      <path d='M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z' />
                      <path d='M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z' />
                    </svg>
                  </span>
                </button>
              </a>

              <a href='https://v1.scrimba.com/certificate/uQyMggf3/gaiengineer' target='_blank' rel='noreferrer'>
                <button className='flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/8 px-3 md:px-4 py-2.5 md:py-3 text-white/70 transition-colors hover:text-white hover:bg-white/15'>
                  <span className='flex items-center gap-2 md:gap-3 text-sm md:text-base font-medium'>
                    <span className='text-white'>
                      <svg xmlns='http://www.w3.org/2000/svg' height='1.3rem' viewBox='0 0 145 100' fill='currentColor'>
                        <path d='M5.73,0h111.43c1.58,0,3.01,0.64,4.05,1.68c1.04,1.04,1.68,2.47,1.68,4.05V77c0,1.58-0.64,3.01-1.68,4.05c-1.04,1.04-2.47,1.68-4.05,1.68h-2.38l-5.01-9.66c0.28-0.85,0.47-1.69,0.6-2.52l0.08-0.53c0.56-0.63,1.11-1.36,1.63-2.21c0.09-0.15,0.18-0.3,0.27-0.46c0.88-1.58,1.46-3.24,1.74-5.02c0.02-0.11,0.03-0.23,0.05-0.34l2.52-2.52V23.25L99.63,6.23H23.25L6.23,23.25v36.22l17.02,17.02H60.5l-3.08,5.95c-0.05,0.09-0.1,0.19-0.15,0.28H5.73c-1.58,0-3.01-0.64-4.05-1.68C0.64,80.01,0,78.58,0,77V5.73c0-1.58,0.64-3.01,1.68-4.05C2.72,0.64,4.15,0,5.73,0L5.73,0z M86.02,41.37c0.54-0.03,1.02,0.06,1.47,0.21c0.44,0.15,0.84,0.38,1.26,0.63c0.42,0.27,0.86,0.63,1.32,1.04l0.03,0.03c0.58,0.5,1.23,1.05,1.95,1.46c0.59,0.33,1.46,0.36,2.38,0.41c1.73,0.06,3.61,0.14,4.85,1.98l0,0c1.07,1.61,1.16,2.82,1.23,4.04l0.02,0.13c0.03,0.59,0.1,1.14,0.31,1.74c0.21,0.62,0.57,1.28,1.17,2.09l0,0c1.13,1.49,1.8,2.75,2.06,3.91c0.27,1.22,0.09,2.31-0.53,3.43l-0.02,0.03c-0.46,0.8-1.14,1.38-1.73,1.88c-0.44,0.38-0.83,0.71-0.95,0.98c-0.32,0.74-0.33,1.41-0.33,2.12c-0.02,0.96-0.03,1.95-0.66,3.22l-0.01,0.03c-0.41,0.78-0.92,1.44-1.53,1.97c-0.63,0.54-1.37,0.95-2.21,1.22c-0.75,0.24-1.44,0.2-2.12,0.15c-0.56-0.04-1.07-0.07-1.46,0.09l-0.05,0.01c-0.81,0.35-1.55,0.95-2.25,1.5c-0.78,0.63-1.52,1.22-2.36,1.49l0,0c-0.62,0.2-1.23,0.29-1.85,0.29c-0.62,0-1.23-0.09-1.85-0.29l-0.03-0.01c-0.83-0.26-1.56-0.86-2.34-1.49c-0.71-0.57-1.46-1.17-2.29-1.52c-0.39-0.17-0.9-0.12-1.46-0.09c-0.66,0.04-1.37,0.09-2.13-0.15l-0.04-0.02c-0.83-0.27-1.55-0.67-2.18-1.2c-0.62-0.54-1.14-1.2-1.53-2c-0.63-1.26-0.64-2.25-0.66-3.21c-0.02-0.71-0.02-1.38-0.33-2.12l-0.01-0.01c-0.13-0.29-0.53-0.62-0.96-0.99c-0.6-0.51-1.28-1.08-1.73-1.88l-0.03-0.05c-0.62-1.1-0.78-2.18-0.51-3.39c0.26-1.16,0.95-2.42,2.07-3.91c0.62-0.8,0.96-1.47,1.17-2.09c0.21-0.6,0.29-1.17,0.32-1.76l0.02-0.12c0.07-1.22,0.17-2.46,1.23-4.04l0.03-0.03c1.23-1.82,3.1-1.88,4.81-1.94c0.92-0.03,1.8-0.08,2.39-0.41l0.02-0.02c0.71-0.41,1.35-0.95,1.94-1.46c0.47-0.41,0.9-0.78,1.35-1.05c0.41-0.27,0.83-0.48,1.26-0.63C85.01,41.43,85.49,41.36,86.02,41.37L86.02,41.37L86.02,41.37z M104.35,91.29l-4.52-0.81l-2.27,4.07c-0.01,0.03-0.03,0.06-0.06,0.08c-0.95,1.17-1.82,1.14-2.57,0.53c-0.81-0.66-1.35-2.07-1.7-3L93.1,91.8l-4.79-9.05c-0.15-0.29-0.04-0.63,0.24-0.77c0.03-0.02,0.06-0.03,0.08-0.03c0.5-0.17,1.05-0.51,1.65-0.96c0.63-0.47,1.29-1.05,1.97-1.65c0.12-0.11,0.27-0.17,0.44-0.15c1.29,0.03,2.55-0.08,3.68-0.45c1.11-0.38,2.13-1.04,3-2.15c0.2-0.26,0.56-0.3,0.8-0.11c0.06,0.06,0.12,0.12,0.15,0.2l5.54,10.7l0.48,1.04c0.02,0.03,0.03,0.06,0.03,0.09c0.22,0.8,0.27,1.49,0,2.01c-0.3,0.59-0.89,0.89-1.88,0.81C104.46,91.32,104.4,91.3,104.35,91.29L104.35,91.29L104.35,91.29z M72.24,90.48l-4.52,0.81c-0.04,0.01-0.09,0.01-0.15,0.01c-0.99,0.08-1.58-0.23-1.88-0.81c-0.27-0.51-0.23-1.2,0-2.01l0.03-0.09l0.48-1.04l5.54-10.7c0.03-0.08,0.09-0.14,0.15-0.2c0.26-0.2,0.6-0.15,0.8,0.1c0.86,1.1,1.88,1.76,3.01,2.15c1.14,0.39,2.39,0.48,3.68,0.45c0.15-0.01,0.3,0.03,0.44,0.15c0.68,0.6,1.34,1.19,1.97,1.65c0.6,0.45,1.16,0.8,1.65,0.96l0.07,0.03c0.29,0.15,0.39,0.5,0.24,0.77l-4.79,9.04l-0.14,0.35c-0.34,0.93-0.88,2.34-1.7,3c-0.75,0.6-1.61,0.65-2.57-0.53c-0.02-0.03-0.04-0.04-0.06-0.07L72.24,90.48L72.24,90.48L72.24,90.48z M93.02,52.4c-1.79-1.79-4.25-2.9-6.99-2.9c-2.74,0-5.2,1.11-6.99,2.9c-1.79,1.79-2.9,4.25-2.9,6.99c0,2.73,1.11,5.2,2.9,6.99c1.79,1.79,4.25,2.9,6.99,2.9c2.73,0,5.2-1.11,6.99-2.9c1.79-1.79,2.9-4.25,2.9-6.99C95.91,56.67,94.81,54.19,93.02,52.4L93.02,52.4L93.02,52.4z M31.02,51.16c-0.4,0-0.76-0.25-1.02-0.64c-0.26-0.4-0.43-0.95-0.43-1.56c0-0.61,0.16-1.16,0.43-1.56c0.26-0.4,0.63-0.64,1.02-0.64h17.1c0.4,0,0.76,0.25,1.02,0.64c0.26,0.4,0.42,0.95,0.42,1.56c0,0.61-0.16,1.17-0.42,1.56c-0.26,0.4-0.63,0.64-1.02,0.64H31.02L31.02,51.16L31.02,51.16z M29.94,64.84c4.22-5.54,7.83-3.02,12.87,0.5c0.25,0.18,0.51,0.35,0.76,0.53c0.72,0.5,1.48,0.41,2.24,0.04c0.82-0.41,1.65-1.14,2.47-1.87l0.02-0.01c0.74-0.65,1.46-1.29,2.24-1.78c0.13-0.08,0.31-0.04,0.39,0.09l1.15,1.81c0.08,0.13,0.04,0.31-0.09,0.39c-0.6,0.38-1.25,0.96-1.91,1.54l-0.02,0.01c-1.15,1.02-2.33,2.05-3.63,2.59c-1.34,0.55-2.79,0.55-4.4-0.57l-0.77-0.54c-1.94-1.36-3.6-2.51-5.1-2.88c-1.43-0.34-2.74,0.07-4.06,1.8c-0.1,0.13-0.28,0.15-0.4,0.05L30,65.25C29.87,65.15,29.84,64.97,29.94,64.84L29.94,64.84L29.94,64.84z M31.02,22.83c-0.4,0-0.77-0.25-1.03-0.64s-0.43-0.95-0.43-1.55c0-0.61,0.16-1.15,0.43-1.55c0.26-0.4,0.63-0.64,1.03-0.64h41.35c0.4,0,0.77,0.25,1.03,0.64c0.26,0.4,0.42,0.95,0.42,1.55c0,0.61-0.16,1.15-0.42,1.55c-0.26,0.4-0.63,0.65-1.03,0.65L31.02,22.83L31.02,22.83L31.02,22.83z M31.02,37.72c-0.4,0-0.76-0.25-1.02-0.65l0,0c-0.26-0.4-0.43-0.95-0.43-1.55c0-0.61,0.16-1.15,0.43-1.56c0.26-0.4,0.63-0.64,1.03-0.64h33.05c0.4,0,0.76,0.25,1.02,0.64l0,0c0.26,0.4,0.43,0.95,0.43,1.55c0,0.61-0.16,1.15-0.43,1.55l0,0c-0.26,0.4-0.63,0.64-1.02,0.64H31.02V37.72L31.02,37.72z' />
                      </svg>
                    </span>
                    Certificate
                  </span>
                  <span className='text-white/60'>
                    <svg className='pl-[2px]' xmlns='http://www.w3.org/2000/svg' height='0.9rem' viewBox='0 0 60 60' fill='#ffffff'>
                      <path d='M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z' />
                      <path d='M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z' />
                    </svg>
                  </span>
                </button>
              </a>

              <button className='flex w-full items-center gap-2 md:gap-3 rounded-2xl border border-white/15 bg-white/8 px-3 md:px-4 py-2.5 md:py-3 text-left text-white/70 transition-colors hover:text-white hover:bg-white/15' onClick={() => setContent('projects')}>
                <span className='inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2'>
                  <img style={{ height: '1.8rem' }} className='invert' src={'assets/GeneralIcons/projects-icon.svg'} alt='Logo' />
                </span>
                <span className='text-sm md:text-lg font-semibold'>Projects</span>
              </button>
            </div>
          </aside>

          <div className='flex min-w-0 flex-col gap-8'>
            <section className='glass-panel bg-white/10 px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 text-white/90 overflow-visible'>
              <div className='pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full bg-[#00bbf9]/30 blur-3xl' aria-hidden='true' />
              <div className='relative z-10 space-y-6'>{renderComponent()}</div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlassPlate;
