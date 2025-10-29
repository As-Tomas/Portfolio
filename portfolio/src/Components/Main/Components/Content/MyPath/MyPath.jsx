import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css';

const timelineEvents = [
  {
    title: 'Poker',
    year: '2016',
    subtitle: 'Where my curiosity was ignited',
    paragraphs: [
      "Besides my daily work as office support, I played poker tournaments in the evenings for many years. Each month's winnings were a solid salary supplement, yet the time investment was enormous.",
      'Automating my strategies sounded tempting, so I searched for tooling and discovered the Deep Mind Pokerbot open source project on GitHub. It was written in Python—and that was the spark that pushed me headfirst into programming.',
    ],
  },
  {
    title: 'WordPress & UiPath',
    year: '2018',
    subtitle: 'E-commerce experiments',
    paragraphs: [
      'Dropshipping was booming, so I learned WordPress and launched an online store. UiPath automations took care of product scraping and order admin.',
      'Since then I’ve delivered WordPress experiences on and off—balancing freedom, automation and UX.',
    ],
  },
  {
    title: 'React Native',
    year: '2019',
    subtitle: 'Mobile-first thinking',
    paragraphs: [
      'To ship a mobile app idea I enrolled in CS50’s Mobile App Development with React Native at HarvardX.',
      'The course grounded me in cross-platform design, Expo, and native capabilities—skills I rely on today.',
    ],
  },
  {
    title: 'Java & C++',
    year: '2020',
    subtitle: 'Deep dive into OOP',
    paragraphs: [
      'I wanted a stronger engineering backbone, so I started at SMK University of Applied Sciences with emphasis on OOP and software architecture.',
    ],
  },
  {
    title: 'Android',
    year: '2022',
    subtitle: 'Hands-on shipping',
    paragraphs: [
      'I dedicated the year to Android development—building public and private apps, automating build flows, and experimenting with UI layouts.',
      'Several of those projects now live in the portfolio you can explore.',
    ],
  },
  {
    title: 'Bachelor: Programming & Multimedia',
    year: '2023',
    subtitle: 'Formalising the craft',
    paragraphs: [
      'I graduated from SMK University of Applied Sciences with a bachelor’s degree in Programming and Multimedia, tying research-backed thinking to real-world delivery.',
    ],
  },
  {
    title: 'Frontend',
    year: '2023',
    subtitle: 'Interface obsession',
    paragraphs: [
      'Contract work and full-time engagements across React, Next.js, WordPress, and product design cemented my love for UI/UX storytelling.',
    ],
  },
  {
    title: 'Full-stack',
    year: '2024',
    subtitle: 'Systems thinking',
    paragraphs: [
      'I led development of a containerised architecture using Docker, MinIO, TimescaleDB, and Elasticsearch—optimising security with least-privilege principles.',
      'Label Studio powered object annotation pipelines, ELK handled observability, and React delivered dynamic operator dashboards. Documentation stitched it all together for seamless handover.',
    ],
  },
];

const MyPath = () => {
  const timelineWithAlignment = useMemo(
    () =>
      timelineEvents.map((event, index) => ({
        ...event,
        align: index % 2 === 0 ? 'left' : 'right',
      })),
    []
  );

  const { ref: indicatorRef, inView: indicatorVisible } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className='mypath flex h-full w-full flex-col gap-10 overflow-y-auto px-2 py-6 text-white'>
      <div className='mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[32px] border border-white/15 bg-white/6 px-6 py-10 sm:px-10 sm:py-14 shadow-[0_40px_80px_rgba(15,23,42,0.45)] backdrop-blur-3xl'>
        <header className='text-center space-y-4'>
          <p className='text-xs uppercase tracking-[0.4em] text-white/50'>Growth timeline</p>
          <h1 className='text-3xl font-semibold text-white'>My Path</h1>
          <p className='mx-auto max-w-2xl text-base text-white/75 leading-relaxed'>
            A visual pulse of how experiments, studies, and professional leaps shaped the developer I am today. Every step
            added new layers—from automation curiosity to full-stack delivery.
          </p>
        </header>

        <div className='relative'>
          <span
            className='pointer-events-none absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 z-0'
            aria-hidden='true'
          >
            <span className='absolute inset-0 rounded-full bg-gradient-to-b from-[#00bbf9]/38 via-[#8338ec]/35 to-[#3a0ca3]/38' />
            <span className='absolute inset-0 rounded-full bg-gradient-to-b from-[#00f5d4]/55 via-[#8338ec]/45 to-[#3a0ca3]/65 blur-[2.2px]' />
          </span>
          <span className='pointer-events-none absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[#00bbf9]' aria-hidden='true' />
          <span className='pointer-events-none absolute left-1/2 bottom-0 h-4 w-4 -translate-x-1/2 rounded-full bg-[#00bbf9]' aria-hidden='true' />

          <div className='relative z-10 flex flex-col gap-12'>
            {timelineWithAlignment.map((event) => (
              <TimelineItem key={event.title} event={event} />
            ))}
          </div>
        </div>

        <footer className='flex flex-col items-center gap-4 text-center'>
          <h2 className='text-2xl font-semibold text-white'>
            I’m ready for the next challenge <span className='text-[#ffd23f]'>now</span>.
          </h2>
          <p className='text-white/70 text-sm uppercase tracking-[0.35em]'>Let’s make it official.</p>
        </footer>
      </div>

      <div
        ref={indicatorRef}
        className={`relative flex justify-center pb-6 ${indicatorVisible ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}
      >
        <img className='h-10 animate-bounceOnce' src='./assets/GeneralIcons/wheel_scroll_mouse.svg' alt='Scroll indicator' />
      </div>
    </div>
  );
};

export default MyPath;

const TimelineItem = ({ event }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const alignmentClasses =
    event.align === 'left'
      ? 'sm:flex-row text-left'
      : 'sm:flex-row-reverse text-left sm:text-right';

  return (
    <div
      ref={ref}
      className={`${styles.section} relative flex flex-col items-center gap-6 sm:items-start ${alignmentClasses}`}
    >
      <span
        className='pointer-events-none absolute top-6 h-4 w-4 -translate-x-1/2 rounded-full border border-white/35 bg-[#00f5d4] shadow-[0_0_18px_rgba(0,245,212,0.45)] left-1/2'
        aria-hidden='true'
      />

      <div
        className={`glass-panel bg-white/12 px-6 py-6 sm:px-8 sm:py-8 w-full sm:w-[calc(50%-1.5rem)] text-white/85 ${styles.card} ${
          event.align === 'left' ? styles.cardLeft : styles.cardRight
        } ${inView ? styles.cardShow : ''}`}
      >
        <header className='flex flex-col gap-1'>
          <span className='text-sm uppercase tracking-[0.3em] text-white/60'>{event.year}</span>
          <h3 className='text-2xl font-semibold text-white'>{event.title}</h3>
          <p className='text-sm text-white/60'>{event.subtitle}</p>
        </header>
        <div className='mt-4 space-y-4 text-sm leading-relaxed'>
          {event.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
