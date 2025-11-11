import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import projectSavedData from '../../../public/data/ProjectsData';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectsNav from '../ProjectCard/ProjectsNav';
import GlassPlate from './Components/GlassPlate';

const Main = ({ content, setContent }) => {
  const projectData = [...projectSavedData].reverse();
  const [selectedProjectId, setSelectedProjectId] = useState(projectData[0].id);
  const [panelSize, setPanelSize] = useState(null);
  const panelRef = useRef(null);
  const panelContentRef = useRef(null);
  const projectCardRef = useRef(null);
  const mainContentRef = useRef(null);
  const prevContentRef = useRef(content);

  const handleProjectSelect = projectId => {
    setSelectedProjectId(projectId);
    if (window.innerWidth < 1024) {
      window.requestAnimationFrame(() => {
        projectCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        projectCardRef.current?.focus({ preventScroll: true });
      });
    }
  };

  const selectedProject = projectData.find(project => project.id === selectedProjectId);

  // Scroll to content on mobile when content changes from header navigation
  useEffect(() => {
    if (prevContentRef.current !== content) {
      prevContentRef.current = content;

      if (window.innerWidth < 768 && mainContentRef.current) {
        window.requestAnimationFrame(() => {
          mainContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, [content]);

  // const whindoHeight = () => {
  //   console.log(window.innerHeight)
  //   if (window.innerHeight < 860) {

  //   }
  // }

  useLayoutEffect(() => {
    if (content !== 'projects') {
      return;
    }

    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const getTargetWidth = () => {
      const viewportWidth = window.innerWidth || 0;
      const gutter = viewportWidth >= 1024 ? 128 : viewportWidth >= 640 ? 72 : 32;
      const maxPanelWidth = 960;
      const availableWidth = Math.max(320, viewportWidth - gutter);
      return Math.min(maxPanelWidth, availableWidth);
    };

    const getContentWidth = () => {
      if (panelContentRef.current) {
        return panelContentRef.current.scrollWidth;
      }
      return panel.scrollWidth;
    };

    const getDockContentWidth = () => {
      const dockList = panel.querySelector<HTMLElement>('#project-dock-list');
      if (!dockList) {
        return 0;
      }
      const horizontalBuffer = 48;
      return dockList.scrollWidth + horizontalBuffer;
    };

    const getContentHeight = () => {
      if (panelContentRef.current) {
        return panelContentRef.current.scrollHeight;
      }
      return panel.scrollHeight;
    };

    const getDockContentHeight = () => {
      const dockList = panel.querySelector<HTMLElement>('#project-dock-list');
      if (!dockList) {
        return 0;
      }
      const verticalBuffer = 40;
      return dockList.scrollHeight + verticalBuffer;
    };

    const updateSize = (heightOverride, widthOverride) => {
      const viewportWidth = window.innerWidth || 0;

      // Only apply fixed sizing on desktop screens (>= 1024px)
      // Let natural CSS flow handle mobile and tablet
      if (viewportWidth < 1024) {
        setPanelSize(null);
        return;
      }

      const baseWidth = getTargetWidth();
      const dockWidth = widthOverride ?? Math.max(getDockContentWidth(), getContentWidth());
      const finalWidth = Math.min(
        Math.max(baseWidth, (dockWidth || baseWidth)),
        Math.max(320, viewportWidth - 16)
      );

      const dockHeight = Math.max(getDockContentHeight(), heightOverride ?? getContentHeight());
      const heightBuffer = 36;
      const measuredHeight =
        Math.max(getContentHeight(), dockHeight || getContentHeight()) + heightBuffer;

      setPanelSize((prev) => {
        if (prev) {
          const widthDiff = Math.abs(prev.width - finalWidth);
          const heightDiff = Math.abs(prev.height - measuredHeight);
          if (widthDiff < 0.5 && heightDiff < 0.5) {
            return prev;
          }
        }
        return {
          width: finalWidth,
          height: measuredHeight,
        };
      });
    };

    updateSize(panel.scrollHeight, panel.scrollWidth);

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver((entries) => {
            for (const entry of entries) {
              updateSize(entry.contentRect.height);
            }
          })
        : null;

    if (resizeObserver) {
      resizeObserver.observe(panel);
    }

    const dockListElement = panel.querySelector('#project-dock-list');
    let dockObserver = null;

    if (dockListElement && typeof ResizeObserver !== 'undefined') {
      dockObserver = new ResizeObserver(() => {
        updateSize();
      });
      dockObserver.observe(dockListElement);
    }

    const handleWindowResize = () => {
      updateSize();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      dockObserver?.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [content]);

  return (
    <div ref={mainContentRef} className='flex flex-col gap-12'>
      {content === 'about' && <GlassPlate setContent={setContent} />}

      {content === 'projects' && (
        <div className='flex flex-col items-center gap-10'>
          <div id='project-card-container' ref={projectCardRef} tabIndex='-1' className='outline-none focus-visible:ring-2 focus-visible:ring-emerald-400'>
            <ProjectCard key={selectedProjectId} project={selectedProject} />
          </div>

          <div
            id='project-selector-panel'
            ref={panelRef}
            className='glass-panel bg-white/10 px-6 py-5 sm:px-8 sm:py-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 w-full max-w-[960px] text-white/80 mx-auto'
        style={
          panelSize
            ? {
                width: `${panelSize.width}px`,
                minWidth: `${panelSize.width}px`,
                maxWidth: `${panelSize.width}px`,
                height: `${panelSize.height}px`,
                minHeight: `${panelSize.height}px`,
                paddingBottom: '2.5rem',
              }
            : undefined
        }
          >
            <div
              ref={panelContentRef}
              className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 w-full text-white/80'
            >
              <div id='project-selector-heading' className='space-y-1 lg:max-w-[280px] lg:self-start'>
                <h3 id='project-selector-title' className='text-xl font-semibold text-white'>
                  Select a project
                </h3>
              </div>
              <ProjectsNav
                onProjectSelect={handleProjectSelect}
                projectData={projectData}
                selectedProjectId={selectedProjectId}
              />
            </div>
          </div>
        </div>
      )}

      {/* <About />
        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        {selectedProject && <ProjectCard key={selectedProject.id} project={selectedProject} />}

        <hr className="mx-auto my-10 bg-black dark:bg-white w-1/2"></hr>
        <Technologies />
     */}

      {/* {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} */}
    </div>
  );
};

export default Main;
