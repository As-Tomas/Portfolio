import PieChartDevelopment from '../Charts/Pie-Chart_Development';
import PieChartProgramer from '../Charts/Pie-Chart_Programer';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
  const { ref: toolsRef, inView: toolsVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id='technologies' className='glass-scroll h-full w-full overflow-y-auto px-1 sm:px-2'>
      <div className='flex flex-col gap-10'>
        <header className='text-center'>
          <p className='muted-text text-sm uppercase tracking-[0.35em]'>Capabilities</p>
          <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>Modern, resilient stacks</h2>
          <p className='mt-2 text-base text-white/75 sm:text-lg'>From concept to deployment, I pair thoughtful design with production-grade engineering.</p>
        </header>

        <div className='grid gap-6 lg:grid-cols-2'>
          <div className='glass-surface rounded-[28px] border border-white/15 p-6 shadow-lg backdrop-blur-xl'>
            <PieChartDevelopment />
          </div>
          <div className='glass-surface rounded-[28px] border border-white/15 p-6 shadow-lg backdrop-blur-xl'>
            <PieChartProgramer />
          </div>
        </div>

        <div className='grid gap-6 lg:grid-cols-3'>
          {expertise.map((item) => (
            <article key={item.title} className='glass-surface rounded-[28px] border border-white/12 p-6 text-white shadow-lg'>
              <img src={item.icon} alt='' className='mx-auto h-14 w-14 rounded-full border border-white/20 bg-white/10 p-3 shadow-md' />
              <h3 className='mt-4 text-xl font-semibold text-white'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-white/75'>{item.copy}</p>
              <p className='mt-3 text-xs uppercase tracking-[0.32em] text-white/60'>{item.note}</p>
            </article>
          ))}
        </div>

        <div
          id='tools'
          ref={toolsRef}
          className={`glass-surface rounded-[32px] border border-white/15 p-6 shadow-lg transition-all duration-700 sm:p-10 ${
            toolsVisible ? 'opacity-100 translate-y-0' : 'translate-y-6 opacity-0'
          }`}
        >
          <h2 className='text-3xl font-semibold text-white'>Tools I reach for daily</h2>
          <p className='muted-text mt-2 max-w-2xl text-sm'>Frameworks, IDEs, and services that keep the delivery pipeline flowing smoothly.</p>
          <div className='mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'>
            {tooling.map((icon) => (
              <div
                key={icon.alt}
                className='glass-ring flex aspect-square items-center justify-center rounded-2xl bg-white/5 p-3 transition hover:scale-105'
              >
                <img src={icon.src} alt={icon.alt} className='h-full w-full object-contain' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const expertise = [
  {
    title: 'Cross-platform Apps',
    copy: 'Hybrid and native deployments for Android and iOS with Expo, .NET MAUI, and Android Studio pipelines tailored to product scope.',
    note: 'Mobile craftsmanship',
    icon: './assets/GeneralIcons/cloud-technology.png',
  },
  {
    title: 'Software Engineering',
    copy: 'Object-oriented design, API integrations, and automation in C++, Java, Python, and Node.js across backend services and data workflows.',
    note: 'Robust backends',
    icon: './assets/GeneralIcons/software-developer.png',
  },
  {
    title: 'Interfaces & Frontends',
    copy: 'Composing responsive UI systems with React, Tailwind, and modern CSS—building accessible experiences that feel alive.',
    note: 'Experience first',
    icon: './assets/GeneralIcons/front-end.png',
  },
];

const tooling = [
  { src: './assets/cursor.png', alt: 'Cursor' },
  { src: './assets/dot_net.svg', alt: '.NET' },
  { src: './assets/visual_studio.png', alt: 'Visual Studio' },
  { src: './assets/vscode.svg', alt: 'VS Code' },
  { src: './assets/android.png', alt: 'Android Studio' },
  { src: './assets/intellij.png', alt: 'IntelliJ' },
  { src: './assets/pcharm.png', alt: 'PyCharm' },
  { src: './assets/wordpress.svg', alt: 'WordPress' },
  { src: './assets/figma.svg', alt: 'Figma' },
  { src: './assets/docker.png', alt: 'Docker' },
  { src: './assets/ELKStack.png', alt: 'ELK Stack' },
  { src: './assets/minio.png', alt: 'MinIO' },
];
