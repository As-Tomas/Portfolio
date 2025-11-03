import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function ProjectsNav({
  onProjectSelect,
  projectData,
  selectedProjectId,
}) {
  const [isCompact, setIsCompact] = useState(false);
  const [windowStart, setWindowStart] = useState(0);

  useEffect(() => {
    const update = () => {
      setIsCompact(window.innerWidth < 1024 && projectData.length > 7);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [projectData.length]);

  useEffect(() => {
    if (!isCompact) {
      setWindowStart(0);
      return;
    }

    const selectedIndex = projectData.findIndex(
      (project) => project.id === selectedProjectId
    );

    if (selectedIndex === -1) return;

    const maxVisible = 15;
    if (selectedIndex < windowStart) {
      setWindowStart(selectedIndex);
    } else if (selectedIndex >= windowStart + maxVisible) {
      setWindowStart(selectedIndex - maxVisible + 1);
    }
  }, [isCompact, projectData, selectedProjectId, windowStart]);

  useEffect(() => {
    if (!isCompact) return;
    const maxVisible = 15;
    const maxStart = Math.max(0, projectData.length - maxVisible);
    if (windowStart > maxStart) {
      setWindowStart(maxStart);
    }
  }, [isCompact, projectData.length, windowStart]);

  const visibleProjects = useMemo(() => {
    if (!isCompact) return projectData;
    const maxVisible = 15;
    return projectData.slice(windowStart, windowStart + maxVisible);
  }, [isCompact, projectData, windowStart]);

  const dragHintClass = isCompact ? "block" : "hidden";

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-2 sm:w-auto">
      <span className={`text-xs uppercase tracking-[0.3em] text-white/60 ${dragHintClass}`}>drag to explore</span>
      <Dock
        projects={visibleProjects}
        onProjectSelect={onProjectSelect}
        selectedProjectId={selectedProjectId}
        isCompact={isCompact}
      />
    </div>
  );
}

function Dock({
  projects,
  onProjectSelect,
  selectedProjectId,
  isCompact,
}: {
  projects: Array<{
    id: number;
    name: string;
    technologies: string[];
  }>;
  onProjectSelect: (projectId: number) => void;
  selectedProjectId: number;
  isCompact: boolean;
}) {
  let mouseX = useMotionValue(Infinity);

  const handleClick = (projectId: number) => {
    onProjectSelect(projectId);
  };

  return (
    <nav
      className="w-full max-w-full"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <ul className={`flex min-h-[4rem] items-end gap-4 rounded-3xl border border-white/20 bg-white/12 px-5 pb-3 shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-2xl sm:mx-auto ${isCompact ? "justify-start overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden touch-pan-x" : "justify-center"}`}>
        {projects.map((project, index) => (
          <li key={project.id}>
            <AppIcon
              mouseX={mouseX}
              isActive={project.id === selectedProjectId}
              onClick={() => handleClick(project.id)}
            >
              <img
                src={project.technologies[0]}
                alt={project.name}
                className="h-full w-full object-contain"
              />
            </AppIcon>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AppIcon({
  mouseX,
  children,
  isActive,
  onClick,
}: {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`flex aspect-square w-10 items-stretch overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 transition-all duration-200 hover:scale-110 hover:bg-white/20 ${
        isActive
          ? "shadow-[0_12px_30px_rgba(131,56,236,0.45)] border-white/50 bg-white/30"
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
