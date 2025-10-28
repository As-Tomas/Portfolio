import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

type ProjectsNavProps = {
  onProjectSelect: (id: number) => void;
  projectData: Array<{ id: number; name: string; technologies: string[] }>;
  selectedProjectId: number;
};

export default function ProjectsNav({
  onProjectSelect,
  projectData,
  selectedProjectId,
}: ProjectsNavProps) {
  const mouseX = useMotionValue(Infinity);

  const activeIndex = useMemo(
    () => projectData.findIndex((project) => project.id === selectedProjectId),
    [projectData, selectedProjectId]
  );

  return (
    <nav
      className="glass-surface rounded-[24px] border border-white/20 px-4 pb-3 pt-4 shadow-lg backdrop-blur-2xl"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      aria-label="Project selector"
    >
      <ul className="flex h-16 items-end gap-3 sm:gap-4">
        {projectData.map((project, index) => (
          <li key={project.id}>
            <AppIcon
              mouseX={mouseX}
              isActive={index === activeIndex}
              label={project.name}
              thumbnail={project.technologies[0]}
              onClick={() => onProjectSelect(project.id)}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

type AppIconProps = {
  mouseX: MotionValue<number>;
  isActive: boolean;
  label: string;
  thumbnail: string;
  onClick: () => void;
};

function AppIcon({ mouseX, isActive, label, thumbnail, onClick }: AppIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-160, 0, 160], [48, 96, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });

  return (
    <motion.button
      ref={ref}
      type="button"
      style={{ width }}
      onClick={onClick}
      className={`group relative flex aspect-square items-center justify-center overflow-hidden rounded-full border transition-all focus:outline-none ${
        isActive
          ? "border-white/70 bg-white/20 shadow-[0_14px_35px_rgba(5,10,25,0.45)]"
          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10"
      }`}
      title={label}
    >
      <img
        src={thumbnail}
        alt={label}
        className="h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
      />
      <span className="pointer-events-none absolute bottom-2 left-1/2 z-20 w-max -translate-x-1/2 rounded-full bg-[rgba(10,12,28,0.8)] px-3 py-1 text-xs font-semibold tracking-wide text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </motion.button>
  );
}
