import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [likes, setLikes] = useState(876);
  const { ref: credoRef, inView: isCredoVisible } = useInView();

  const handleLikeClick = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <section id='about' className='glass-scroll h-full w-full overflow-y-auto px-1 sm:px-2'>
      <article className='space-y-8'>
        <header className='text-center'>
          <p className='muted-text text-sm uppercase tracking-[0.35em]'>Welcome</p>
          <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>Hello, I&apos;m Tomas Bance</h2>
          <p className='mt-2 text-base text-white/75 sm:text-lg'>Full-Stack Developer crafting products with glassy aesthetics and resilient architecture.</p>
        </header>

        <div className='mx-auto flex max-w-3xl flex-col gap-4 text-left text-[15px] leading-relaxed text-white/85 sm:text-base'>
          <p>
            Hello! I&apos;m Tomas, a full-stack developer with a toolkit spanning Java, C++, JavaScript, React, React Native, and Next.js. I thrive when translating complex ideas into polished digital products—whether that&apos;s E-commerce platforms, mobile applications, or immersive web experiences.
          </p>
          <p>
            I earned my bachelor&apos;s degree in programming at SMK University and continue to experiment across the stack. I&apos;m obsessed with purposeful design systems, intuitive UX, and teams that enjoy scaling ambitious ideas.
          </p>
          <p>Curious about the journey so far or where we could build next? Take a stroll through the projects or drop me a message.</p>
        </div>

        <div className='mx-auto w-full max-w-2xl rounded-[24px] border border-white/15 bg-[rgba(8,11,24,0.65)] p-6 text-white shadow-lg backdrop-blur-xl'>
          <FontAwesomeIcon icon={faQuoteLeft} className='mb-4 text-2xl text-white/60' />
          <p className='text-lg font-medium leading-7 text-white/90'>There is nothing impossible—only work that hasn&apos;t met time and willpower yet.</p>
          <div className='glass-divider my-4' />
          <div className='flex items-center justify-between text-sm text-white/80'>
            <span ref={credoRef}>{isCredoVisible ? 'Thanks for reading!' : 'My credo'}</span>
            <button type='button' onClick={handleLikeClick} className='flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold text-white transition hover:bg-white/20'>
              <span className='rounded-full bg-[rgba(0,0,0,0.35)] px-2 py-1'>{likes}</span>
              <FontAwesomeIcon icon={faHeart} className='text-[#f34135]' />
            </button>
          </div>
        </div>
      </article>

      <div className={`pointer-events-none mt-12 flex justify-center ${isCredoVisible ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
        <img className='h-12 animate-bounceOnce' src='./assets/GeneralIcons/wheel_scroll_mouse.svg' alt='Scroll indicator' />
      </div>
    </section>
  );
};

export default About;
