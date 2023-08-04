import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

export default function ProjectsNav({onProjectSelect, projectData}) {
  return (
    <div>
      
      <Dock onProjectSelect={onProjectSelect}>
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
}: {
  children: React.ReactNode;
  onProjectSelect: (index: number) => void;
}) {
  let mouseX = useMotionValue(Infinity);
  const [activeIndex, setActiveIndex] = React.useState(-1);
  // console.log(typeof onProjectSelect);

  const handleClick = (index) => {
    setActiveIndex(index);
    onProjectSelect(index);
  };

  return (
    <nav
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <ul className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-gray-700 px-4 pb-3">
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
      className={`aspect-square w-10 rounded-full bg-gray-100 ${
        isActive ? "border-red-500 border-2 bg-gray-200   " : ""
      }`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
