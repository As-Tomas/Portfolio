import { useState } from 'react';

const Header = ({ setContent, onToggleTheme, activeTheme, activeContent }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMenu = (prop) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (prop === 'about') {
      setContent('about');
    } else {
      setContent('projects');
    }
  };

  const themeLabel = activeTheme === 'aurora' ? 'Aurora Sunset' : 'Neon Lagoon';

  return (
    <div className="fixed top-6 left-1/2 z-40 w-full max-w-6xl -translate-x-1/2 px-4">
      <header className="glass-surface rounded-[28px] border border-white/20 px-6 py-4 shadow-lg backdrop-blur-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => hideMenu('about')}
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-white drop-shadow-md focus:outline-none"
            >
              Portfolio
            </button>
            <span className="hidden text-sm uppercase tracking-[0.35em] text-[var(--text-secondary)] sm:inline">
              Tomas Bance
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              id="mobile-open-button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-3xl text-white/80 shadow-[0_10px_20px_rgba(6,10,30,0.35)] backdrop-blur-md transition hover:text-white focus:outline-none sm:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              &#9776;
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white sm:flex glass-pill"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--accent-100)' }} />
              {themeLabel}
            </button>
          </div>
        </div>

        <nav
          className={`sm:mt-4 ${
            isMobileMenuOpen
              ? 'mt-4 flex flex-col gap-4 rounded-2xl border border-white/20 bg-[rgba(10,13,28,0.76)] p-5 text-lg text-white shadow-xl sm:hidden'
              : 'hidden sm:flex sm:items-center sm:justify-between'
          }`}
          aria-label="main navigation"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <a
              href="#About"
              className={`neon-underline ${
                activeContent === 'about' ? 'is-active text-white' : 'text-white/75'
              } text-lg font-medium transition-colors sm:text-base`}
              onClick={() => hideMenu('about')}
            >
              About
            </a>
            <a
              href="#Portfolio"
              className={`neon-underline ${
                activeContent === 'projects' ? 'is-active text-white' : 'text-white/75'
              } text-lg font-medium transition-colors sm:text-base`}
              onClick={() => hideMenu('projects')}
            >
              Projects
            </a>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="mt-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition hover:text-white sm:hidden glass-pill"
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--accent-100)' }} />
            {themeLabel}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
