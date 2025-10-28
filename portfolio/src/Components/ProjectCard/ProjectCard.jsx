import PropTypes from "prop-types";
import { useMemo, useState } from "react";

const ProjectCard = ({ project }) => {
  const images = project.images?.length ? project.images.slice(0, 4) : ["./assets/NoPreview.png"];
  const [activeImage, setActiveImage] = useState(0);

  const paragraphs = useMemo(
    () =>
      project.description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    [project.description]
  );

  return (
    <article className="relative flex flex-col gap-10 lg:flex-row">
      <div className="glass-surface relative flex-1 rounded-[28px] border border-white/15 p-6 shadow-lg">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(255,255,255,0.1), transparent 55%), radial-gradient(circle at 85% 80%, rgba(0,187,249,0.25), transparent 60%)',
        }} />
        <div className="relative overflow-hidden rounded-[26px] border border-white/20 bg-[rgba(5,8,20,0.55)] shadow-[0_18px_40px_rgba(6,10,32,0.45)]">
          <img
            src={images[activeImage]}
            alt={`${project.name} preview ${activeImage + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
        {images.length > 1 && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {images.map((image, index) => (
              <button
                key={image + index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`glass-ring group relative overflow-hidden rounded-[18px] border border-white/10 p-2 transition ${
                  activeImage === index ? 'bg-white/15' : 'bg-white/5 hover:bg-white/12'
                }`}
              >
                <img src={image} alt={`${project.name} thumbnail ${index + 1}`} className="h-full w-full object-cover opacity-90 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="glass-surface flex flex-1 flex-col gap-6 rounded-[28px] border border-white/15 p-6 shadow-lg lg:p-8">
        <header>
          <p className="muted-text text-sm uppercase tracking-[0.32em]">Featured Project</p>
          <h2 className="mt-2 text-3xl font-semibold text-white drop-shadow">{project.name}</h2>
        </header>

        <div className="flex flex-col gap-3">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-white/85">
              {paragraph}
            </p>
          ))}
        </div>

        {project.technologies?.length ? (
          <div>
            <p className="muted-text text-sm uppercase tracking-[0.32em]">Stack</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.technologies.slice(0, 6).map((technology, index) => (
                <span
                  key={technology + index}
                  className="glass-ring flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 p-2"
                >
                  <img src={technology} alt="Technology" className="h-full w-full object-contain" />
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.slice(0, 3).map((link, index) => (
              <button
                key={link + index}
                type="button"
                onClick={() => window.open(link, "_blank", "noopener")}
                className="accent-button"
              >
                View on GitHub
              </button>
            ))}
          </div>
        ) : (
          <p className="muted-text">Repository visibility pending.</p>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    technologies: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
