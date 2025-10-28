import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

const timeline = [
  {
    title: 'Poker',
    year: '2016',
    description:
      "Evenings at the poker table sparked my curiosity for automation. Reverse-engineering strategies led me to DeepMind's open-source bot and my first experiments with Python.",
  },
  {
    title: 'WordPress & UiPath',
    year: '2018',
    description:
      'Identified a local dropshipping niche, built WordPress stores, and automated inventory and order flows with UiPath. Freelance projects continue to this day.',
  },
  {
    title: 'React Native',
    year: '2019',
    description:
      'HarvardX CS50 courses opened the door to mobile development. I prototyped ideas that were impossible to ship with my Python background alone.',
  },
  {
    title: 'Java & C++ Studies',
    year: '2020',
    description:
      'Joined SMK University to dive into object-oriented design. Formal studies sharpened engineering patterns and reinforced low-level fundamentals.',
  },
  {
    title: 'Android Deep Dive',
    year: '2022',
    description:
      'Spent the year building native Android apps—some public, some exploratory—to refine architecture, testing, and UI craftsmanship.',
  },
  {
    title: 'Bachelor Graduation',
    year: '2023',
    description:
      'Completed my bachelor in Programming & Multimedia. Summed up the journey with a focus on software quality and real-world projects.',
  },
  {
    title: 'Frontend Focus',
    year: '2023',
    description:
      'Freelance and agency engagements centered around React, Next.js, WordPress, and UI/UX design systems for modern web products.',
  },
  {
    title: 'Full-stack Systems',
    year: '2024',
    description:
      'Led Dockerized pipelines with MinIO, TimescaleDB, and Elasticsearch, built camera monitoring dashboards, integrated Label Studio, and documented scalable architectures.',
  },
];

const MyPath = () => {
  const timelineWithAlignment = useMemo(
    () =>
      timeline.map((entry, index) => ({
        ...entry,
        align: index % 2 === 0 ? 'left' : 'right',
      })),
    []
  );

  return (
    <section className='mypath glass-scroll h-full w-full overflow-y-auto px-1 sm:px-3 text-white'>
      <div className='mx-auto max-w-4xl space-y-12 pb-24 pt-10'>
        <header className='mx-auto max-w-2xl text-center'>
          <p className='muted-text text-sm uppercase tracking-[0.35em]'>Journey</p>
          <h1 className='mt-3 text-3xl font-semibold sm:text-4xl'>My path</h1>
          <p className='mt-3 text-base text-white/75'>How curiosity turned experiments into a career across software, automation, and full-stack product delivery.</p>
        </header>

        <div className='relative py-6'>
          <div className='absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/25' aria-hidden />
          <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--accent-200)]' aria-hidden />
          <div className='absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[var(--accent-200)]' aria-hidden />

          <div className='space-y-16'>
            {timelineWithAlignment.map((entry) => (
              <TimelineItem key={entry.title} entry={entry} />
            ))}
          </div>
        </div>

        <div className='text-center'>
          <h2 className='text-2xl font-bold text-white/90'>I&apos;m ready to join the next chapter. 🔔</h2>
        </div>
      </div>
    </section>
  );
};

export default MyPath;

const TimelineItem = ({ entry }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const alignmentClasses =
    entry.align === 'left'
      ? 'sm:flex-row text-left'
      : 'sm:flex-row-reverse text-left sm:text-right';

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center gap-6 sm:items-start ${alignmentClasses} transition-all duration-700 ${
        inView ? 'translate-x-0 opacity-100' : entry.align === 'left' ? '-translate-x-6 opacity-0' : 'translate-x-6 opacity-0'
      }`}
    >
      <span className='indicator absolute top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-white/40 bg-[var(--accent-100)] shadow-[0_0_20px_rgba(0,245,212,0.45)] left-1/2' aria-hidden />

      <div className='glass-surface flex w-full flex-col gap-3 rounded-[26px] border border-white/10 bg-[rgba(5,8,20,0.55)] p-6 text-white shadow-[0_24px_45px_rgba(6,10,28,0.45)] sm:w-[calc(50%-1.5rem)]'>
        <p className='muted-text text-xs uppercase tracking-[0.4em]'>{entry.year}</p>
        <h3 className='text-2xl font-semibold text-white'>{entry.title}</h3>
        <p className='text-sm leading-relaxed text-white/80'>{entry.description}</p>
      </div>
    </div>
  );
};
