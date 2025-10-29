import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [likes, setLikes] = useState(876);
  const { ref: thisIsVisible, inView: isVisible } = useInView();

  const handleLikeClick = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <section id='about' className='flex h-full w-full flex-col gap-8 overflow-y-auto pt-4 text-white scroll-mt-40'>
      <header className='text-center'>
        <h2 className='text-2xl sm:text-3xl font-semibold leading-relaxed'>
          Welcome! <br /> My name is <span className='text-[#00f5d4]'>Tomas Bance</span> <br /> I'm a Full-Stack Developer
        </h2>
      </header>

      <article className='mx-auto flex w-full max-w-4xl flex-col gap-6 text-lg leading-relaxed text-white/80 px-4 sm:px-0'>
        <p
          style={{
            textIndent: '2em',
            textAlign: 'justify',
            textJustify: 'inter-word',
            textAlignLast: 'left',
          }}>
          Hello! I'm Tomas, a full-stack developer with a penchant for E-commerce and mobile app development. My toolkit? Java, C++, JavaScript, React, React Native, NextJS and more. I’m looking to collaborate on anything that is related to apps. As a gear-up I finished my bachelor's degree at SMK
          University as a programmer, and I'm eager for new challenging projects.
        </p>

        <p
          style={{
            textIndent: '2em',
            textAlign: 'justify',
            textJustify: 'inter-word',
            textAlignLast: 'left',
          }}>
          Curious about my journey or where we can go next? Dive into my portfolio to explore the experiences that shaped my craft and the products I am most proud of.
        </p>
      </article>

      <div className='mx-auto h-px w-3/4 bg-gradient-to-r from-white/0 via-white/30 to-white/0' />

      <div className='mx-auto w-full max-w-3xl px-4 sm:px-0'>
        <div className='glass-panel glass-panel-flat bg-white/15 px-6 py-6 sm:px-8 rounded-3xl relative'>
          <div className='relative flex flex-col gap-5 text-white/80'>
            <FontAwesomeIcon icon={faQuoteLeft} className={`text-2xl text-[#ffd23f] ${isVisible ? 'animate-pulse' : ''}`} />
            <p className='leading-7'>There is nothing impossible... Just a question of time and will!</p>
            <div className='h-px bg-gradient-to-r from-white/0 via-white/40 to-white/0' />
            <div className='flex items-center justify-between text-sm font-semibold'>
              <p ref={thisIsVisible} className='uppercase tracking-[0.35em] text-xs text-white/60'>
                My credo
              </p>
              <div className='flex items-center gap-2'>
                <span className='rounded-full bg-white/10 py-1 px-3 text-white/80'>{likes}</span>
                <button aria-label='Send appreciation' className='text-[#f72585] transition-transform hover:scale-110' onClick={handleLikeClick}>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative flex justify-center ${isVisible ? 'hidden' : ''}`}>
        <img className='h-10 animate-bounceOnce' src='./assets/GeneralIcons/wheel_scroll_mouse.svg' alt='Scroll indicator' />
      </div>
    </section>
  );
};

export default About;
