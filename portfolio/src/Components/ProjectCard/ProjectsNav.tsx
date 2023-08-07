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
    <div className="mx-auto">
      
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
      <ul className=" flex  h-16 items-end gap-4 rounded-2xl border-2 border-[rgba(225,224,224,0.2)] shadow-neon_indigo  backdrop-blur-md       
      bg-gradient-to-t from-[rgba(175,174,174,0.7)] to-[rgba(40,40,40,0.3)]    px-4 pb-3">
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
      className={`flex items-stretch p-2 overflow-hidden aspect-square w-10 rounded-full bg-gray-100 active:transform-gpu ${
        isActive ? "border-red-500 border-2 bg-gray-200 " : ""
      }`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
