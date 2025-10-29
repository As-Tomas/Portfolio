import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

export default function ProjectsNav({
  onProjectSelect,
  projectData,
  selectedProjectId,
}) {
  return (
    <div className="mx-auto w-full sm:w-auto">
      <Dock
        onProjectSelect={onProjectSelect}
        selectedProjectId={selectedProjectId}
      >
        {projectData.map((project) => (
          <img
            key={project.id}
            src={project.technologies[0]}
            alt={project.name}
            onClick={() => onProjectSelect(project.id)}
          />
        ))}
      </Dock>
    </div>
  );
}

function Dock({
  children,
  onProjectSelect,
  selectedProjectId,
}: {
  children: React.ReactNode;
  onProjectSelect: (index: number) => void;
  selectedProjectId: number;
}) {
  let mouseX = useMotionValue(Infinity);

  const [activeIndex, setActiveIndex] = React.useState(0);
  // console.log(typeof onProjectSelect);

  const handleClick = (index) => {
    setActiveIndex(index);
    onProjectSelect(index);
  };

  return (
    <nav
      className="inline-block"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <ul className="inline-flex min-h-[4rem] items-end gap-4 rounded-3xl border border-white/20 bg-white/12 px-5 pb-3 shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
        {!Array.isArray(children)
          ? children
          : children.map((node, index) => (
              <li key={index}>
                <AppIcon
                  mouseX={mouseX}
                  isActive={index === activeIndex}
                  onClick={() => handleClick(index)}
                >
                  {node}
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
