import { useInView } from 'react-intersection-observer';
import PieChartDevelopment from '../Charts/Pie-Chart_Development';
import PieChartProgramer from '../Charts/Pie-Chart_Programer';

const capabilityCards = [
  {
    icon: './assets/GeneralIcons/cloud-technology.png',
    title: 'Android & iOS App Development',
    description:
      'Hybrid and native builds powered by Expo SDK, .NET MAUI, Android Studio and platform-specific tooling.',
    footnote: 'Platform specific app delivery.',
    accent: 'var(--neon-lagoon-2)',
  },
  {
    icon: './assets/GeneralIcons/software-developer.png',
    title: 'Software Development',
    description: 'Robust backend services in C++, Java, and Python with clean architecture and testing discipline.',
    footnote: 'Functional & OOP mindsets.',
    accent: 'var(--aurora-sunset-1)',
  },
  {
    icon: './assets/GeneralIcons/front-end.png',
    title: 'Frontend Engineering',
    description: 'Responsive interfaces crafted with HTML, CSS, React, and design systems built on Tailwind.',
    footnote: 'Design-first web experiences.',
    accent: 'var(--neon-lagoon-3)',
  },
];

const developmentEnvironments = [
  { src: './assets/cursor.png', alt: 'Cursor' },
  { src: './assets/dot_net.svg', alt: '.NET' },
  { src: './assets/visual_studio.png', alt: 'Visual Studio' },
  { src: './assets/vscode.svg', alt: 'VS Code' },
  { src: './assets/android.png', alt: 'Android Studio' },
  { src: './assets/intellij.png', alt: 'IntelliJ' },
  { src: './assets/pcharm.png', alt: 'PyCharm' },
  { src: './assets/wordpress.svg', alt: 'WordPress' },
  { src: './assets/java.svg', alt: 'Java' },
  { src: './assets/js.svg', alt: 'JavaScript' },
  { src: './assets/csharp.svg', alt: 'C#' },
  { src: './assets/Cplus.svg', alt: 'C++' },
  { src: './assets/python.svg', alt: 'Python' },
  { src: './assets/mongoDB.png', alt: 'MongoDB' },
  { src: './assets/Microsoft_SQL_Server.png', alt: 'SQL Server' },
  { src: './assets/tailwind.svg', alt: 'Tailwind' },
  { src: './assets/html.svg', alt: 'HTML' },
  { src: './assets/css.svg', alt: 'CSS' },
];

const creativeTools = [
  { src: './assets/blender.png', alt: 'Blender' },
  { src: './assets/figma.svg', alt: 'Figma' },
  { src: './assets/photoShop.svg', alt: 'Photoshop' },
];

const Technologies = () => {
  const { ref: indicatorRef, inView: isIndicatorVisible } = useInView();

  return (
    <section
      id='technologies'
      className='flex h-full w-full flex-col gap-10 overflow-y-auto scroll-mt-20 px-2 pt-2 text-white'
    >
      <header className='text-center space-y-2'>
        <p className='text-xs uppercase tracking-[0.4em] text-white/50'>Software engineer · Full-stack developer</p>
        <h2 className='text-3xl font-semibold'>Known Technologies</h2>
      </header>

      <div className='glass-panel bg-white/10 px-6 py-8 sm:px-8 lg:px-10'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-start'>
          <div className='glass-panel bg-white/8 px-4 pb-6 pt-5 lg:flex-1'>
            <h3 className='mb-4 text-lg font-semibold text-white'>Development Focus</h3>
            <PieChartDevelopment />
          </div>
          <div className='glass-panel bg-white/8 px-4 pb-6 pt-5 lg:flex-1'>
            <h3 className='mb-4 text-lg font-semibold text-white'>Programming Toolkit</h3>
            <PieChartProgramer />
          </div>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {capabilityCards.map((card) => (
          <article
            key={card.title}
            className='glass-panel bg-white/10 px-5 py-6 sm:px-6 flex flex-col gap-4 text-sm text-white/80'
            style={{
              boxShadow: '0 24px 60px rgba(15, 23, 42, 0.35)',
            }}
          >
            <div className='flex items-center gap-4'>
              <span
                className='inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_12px_30px_rgba(15,23,42,0.25)]'
                style={{ background: `linear-gradient(135deg, ${card.accent}, rgba(255,255,255,0.05))` }}
              >
                <img src={card.icon} alt={card.title} className='h-full w-full object-contain' />
              </span>
              <h3 className='text-lg font-semibold text-white'>{card.title}</h3>
            </div>
            <p className='leading-relaxed'>{card.description}</p>
            <span className='glass-chip self-start text-xs uppercase tracking-[0.3em]'>{card.footnote}</span>
          </article>
        ))}
      </div>

      <section className='glass-panel bg-white/10 px-6 py-8 sm:px-8' ref={indicatorRef}>
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className='text-xl font-semibold text-white'>Tools I Use</h3>
            <p className='text-sm uppercase tracking-[0.3em] text-white/50'>Primary development environments</p>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>
            {developmentEnvironments.map((tool) => (
              <span
                key={tool.alt}
                className='flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 transition-transform duration-200 hover:scale-110 hover:bg-white/20 lg:h-20 lg:w-20'
              >
                <img src={tool.src} alt={tool.alt} className='h-full w-full object-contain' />
              </span>
            ))}
          </div>

          <div>
            <h4 className='text-lg font-semibold text-white'>Design & Imaging</h4>
          </div>
          <div className='flex flex-wrap justify-center gap-4'>
            {creativeTools.map((tool) => (
              <span
                key={tool.alt}
                className='flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 transition-transform duration-200 hover:scale-110 hover:bg-white/20 lg:h-20 lg:w-20'
              >
                <img src={tool.src} alt={tool.alt} className='h-full w-full object-contain' />
              </span>
            ))}
            <span className='flex h-16 w-24 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-3 transition-transform duration-200 hover:scale-110 hover:bg-white/20 lg:h-20 lg:w-28'>
              <svg viewBox='0 0 71 20' fill='none' role='img' className='w-full' title='Expo home'>
                <path
                  d='M9.258 6.342c.158-.23.331-.26.472-.26.14 0 .374.03.532.26 2.06 2.806 6.332 10.208 6.727 10.611.585.597 1.388.225 1.854-.452.46-.667.587-1.135.587-1.634 0-.34-6.653-12.614-7.324-13.636C11.462.248 11.252 0 10.15 0h-.825c-1.1 0-1.259.248-1.903 1.23C6.75 2.254.097 14.528.097 14.868c0 .5.127.967.587 1.634.466.677 1.269 1.05 1.854.452.395-.403 4.661-7.805 6.72-10.61zm14.941-5.237v15.344h9.35v-3.113h-6.125v-3.244h5.45V6.98h-5.45V4.218h6.125V1.105h-9.35zM46.25 16.449l-3.88-5.568 3.619-5.195h-3.662L40.54 8.23l-1.765-2.543h-3.706l3.618 5.217-3.857 5.546h3.661l2.027-2.915 2.027 2.915h3.705zm7.572-10.982c-1.482 0-2.637.614-3.378 1.732V5.686H47.37V20h3.073v-5.063c.74 1.117 1.896 1.731 3.378 1.731 2.768 0 4.97-2.52 4.97-5.611 0-3.091-2.202-5.59-4.97-5.59zm-.697 8.242c-1.504 0-2.681-1.14-2.681-2.652 0-1.49 1.177-2.653 2.68-2.653 1.483 0 2.681 1.184 2.681 2.653 0 1.49-1.198 2.652-2.68 2.652zm12.188-8.242c-3.16 0-5.558 2.411-5.558 5.612 0 3.2 2.397 5.59 5.557 5.59 3.139 0 5.558-2.39 5.558-5.59 0-3.2-2.42-5.612-5.558-5.612zm0 2.96c1.438 0 2.55 1.117 2.55 2.652 0 1.49-1.112 2.63-2.55 2.63-1.46 0-2.55-1.14-2.55-2.63 0-1.535 1.09-2.653 2.55-2.653z'
                  fill='currentColor'
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </section>

      <div className={`relative flex justify-center pb-4 ${isIndicatorVisible ? 'hidden' : ''}`}>
        <img className='h-10 animate-bounceOnce' src='./assets/GeneralIcons/wheel_scroll_mouse.svg' alt='Scroll indicator' />
      </div>
    </section>
  );
};

export default Technologies;
