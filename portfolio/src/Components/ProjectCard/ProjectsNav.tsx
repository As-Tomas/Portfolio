import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const MAX_ICON_SIZE = 100;
const BASE_ICON_SIZE = 40;
const VERTICAL_PADDING = 36;
const DEFAULT_DOCK_HEIGHT = MAX_ICON_SIZE + VERTICAL_PADDING;

export default function ProjectsNav({
  onProjectSelect,
  projectData,
  selectedProjectId,
}) {
  const [isCompact, setIsCompact] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const [windowStart, setWindowStart] = useState(0);

  useEffect(() => {
    const update = () => {
      // Tablets and mobile always use compact mode
      // Desktop (>= 1024px) never uses compact mode
      setIsCompact(window.innerWidth < 1024);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
    <div
      id="project-dock-container"
      className={`mx-auto flex w-full flex-col items-center gap-2 ${
        !isCompact ? "sm:w-auto sm:self-end sm:items-end" : ""
      }`}
    >
      <span
        id="project-dock-hint"
        className={`text-xs uppercase tracking-[0.3em] text-white/60 ${dragHintClass}`}
      >
        drag to explore
      </span>
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
  const listRef = useRef<HTMLUListElement>(null);
  const lockedListHeightRef = useRef(DEFAULT_DOCK_HEIGHT);
  const [isDraggingList, setIsDraggingList] = useState(false);
  const [listSize, setListSize] = useState<{ height: number } | null>(
    // Only apply fixed sizing when NOT in compact mode (desktop with few projects)
    !isCompact && typeof window !== 'undefined'
      ? { height: DEFAULT_DOCK_HEIGHT }
      : null
  );
  const dragStateRef = useRef({
    pointerId: null as number | null,
    startX: 0,
    scrollLeft: 0,
    hasMoved: false,
  });

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const updateHeight = (heightOverride?: number) => {
      // Only apply fixed height when NOT in compact mode
      // Compact mode (mobile/tablet) uses natural CSS flow
      if (isCompact) {
        setListSize(null);
        return;
      }

      const measuredHeight = Math.max(
        DEFAULT_DOCK_HEIGHT,
        heightOverride ?? list.scrollHeight
      );
      if (measuredHeight > lockedListHeightRef.current) {
        lockedListHeightRef.current = measuredHeight;
      }
      setListSize({ height: lockedListHeightRef.current });
    };

    updateHeight();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateHeight(entry.contentRect.height);
      }
    });

    resizeObserver.observe(list);

    const handleWindowResize = () => {
      // Reset sizing on resize - let updateHeight recalculate
      if (isCompact) {
        setListSize(null);
        return;
      }

      lockedListHeightRef.current = Math.max(
        lockedListHeightRef.current,
        list.scrollHeight
      );
      setListSize({ height: lockedListHeightRef.current });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length, isCompact]);

  const handleClick = (projectId: number) => {
    onProjectSelect(projectId);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLUListElement>) => {
    if (!isCompact) {
      return;
    }
    const list = listRef.current;
    if (!list) {
      return;
    }
    // Track pointer down but don't capture yet
    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: list.scrollLeft,
      hasMoved: false,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
    // Check if this pointer is the one we're tracking
    if (!isCompact || dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }
    const list = listRef.current;
    if (!list) {
      return;
    }
    const delta = event.clientX - dragStateRef.current.startX;

    // Only start dragging if moved more than 5 pixels
    if (Math.abs(delta) > 5) {
      if (!dragStateRef.current.hasMoved) {
        // First time detecting movement - capture pointer and set dragging state
        dragStateRef.current.hasMoved = true;
        setIsDraggingList(true);
        try {
          list.setPointerCapture(event.pointerId);
        } catch {
          // ignore if capture fails
        }
      }
      list.scrollLeft = dragStateRef.current.scrollLeft - delta;
    }
  };

  const stopDragging = (event: React.PointerEvent<HTMLUListElement>) => {
    if (!isCompact) {
      return;
    }

    // Skip if this isn't the pointer we're tracking
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    const wasActualDrag = dragStateRef.current.hasMoved;

    // Only need to release capture if we actually captured it
    if (wasActualDrag && isDraggingList) {
      const list = listRef.current;
      if (list) {
        try {
          list.releasePointerCapture(event.pointerId);
        } catch {
          // ignore
        }
      }
    }

    // Reset drag state
    dragStateRef.current.pointerId = null;
    dragStateRef.current.hasMoved = false;
    if (isDraggingList) {
      setIsDraggingList(false);
    }
  };

  return (
    <nav
      id="project-dock-nav"
      className="w-full max-w-full"
      onMouseMove={(e) => {
        if (!isCompact) {
          mouseX.set(e.pageX);
        }
      }}
      onMouseLeave={() => {
        if (!isCompact) {
          mouseX.set(Infinity);
        }
      }}
    >
      <ul
        ref={listRef}
        id="project-dock-list"
        className={`flex min-h-[4rem] items-end gap-4 rounded-3xl border border-white/20 bg-white/12 px-5 pb-3 shadow-[0_18px_45px_rgba(15,23,42,0.35)] backdrop-blur-2xl ${
          isCompact
            ? "justify-start overflow-x-auto overscroll-x-contain [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing"
            : "justify-center sm:mx-auto"
        } ${isDraggingList ? "cursor-grabbing" : ""}`}
        style={
          listSize
            ? {
                height: `${listSize.height}px`,
                minHeight: `${listSize.height}px`,
              }
            : undefined
        }
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        {projects.map((project, index) => (
          <li key={project.id} id={`project-dock-item-${project.id}`}>
            <AppIcon
              mouseX={mouseX}
              isActive={project.id === selectedProjectId}
              isCompact={isCompact}
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
  isCompact,
  onClick,
}: {
  mouseX: MotionValue<number>;
  children: React.ReactNode;
  isActive: boolean;
  isCompact: boolean;
  onClick: () => void;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const baseWidthRange = isCompact ? [40, 40, 40] : [40, 70, 40];
  let widthSync = useTransform(distance, [-150, 0, 150], baseWidthRange);
  let width = useSpring(widthSync, { mass: 0.05, stiffness: 225, damping: 12 });

  const activeClasses = isCompact
    ? isActive
      ? "border-white/70 bg-white/30 scale-110"
      : "border-white/20 bg-white/10"
    : isActive
    ? "shadow-[0_12px_30px_rgba(131,56,236,0.45)] border-white/50 bg-white/30"
    : "border-white/20 bg-white/10";

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`flex aspect-square w-10 items-stretch overflow-hidden rounded-2xl border p-2 transition-all duration-200 ${
        isCompact ? '' : 'hover:scale-110 hover:bg-white/20'
      } ${activeClasses}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
