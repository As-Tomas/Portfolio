import { useState } from 'react';

export interface EnableVoiceGateProps {
  onEnable: () => void;
  className?: string;
}

const EnableVoiceGate = ({ onEnable, className = '' }: EnableVoiceGateProps) => {
  const [isHuman, setIsHuman] = useState(false);

  const handleEnable = () => {
    if (!isHuman) {
      return;
    }
    onEnable();
  };

  return (
    <div
      className={`voice-gate relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-8 text-white shadow-2xl shadow-emerald-500/20 backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/40 hover:bg-white/20 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(15, 118, 110, 0.2))',
      }}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <span
          className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-emerald-400/40"
          aria-hidden
        />
        <span
          className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-500/30"
          aria-hidden
        />
      </span>
      <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">Enable AI Assistants</h2>
      <p className="mt-3 text-center text-sm text-slate-100/80 sm:text-base">
        AI agents are running on this site, so please confirm you are human to access all features.
      </p>

      <label className="mt-6 flex items-start gap-3 text-sm sm:text-base">
        <input
          type="checkbox"
          checked={isHuman}
          onChange={(event) => setIsHuman(event.target.checked)}
          className="mt-1 h-5 w-5 rounded border-white/40 bg-white/20 text-emerald-300 transition focus:ring-emerald-300"
        />
        <span>I am human and I understand that the conversation may be recorded to provide more accurate recommendations.</span>
      </label>

      <button
        type="button"
        className="mt-8 w-full rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg shadow-emerald-400/40 transition hover:from-emerald-300 hover:via-emerald-400 hover:to-cyan-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-100/10 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"
        onClick={handleEnable}
        disabled={!isHuman}
      >
        Enable AI Assistants
      </button>
    </div>
  );
};

export default EnableVoiceGate;
