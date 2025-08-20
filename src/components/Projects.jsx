import React, { useState } from "react";

const cardColors = [
  "linear-gradient(120deg, #90CAF9 0%, #4285F4 100%)",
  "linear-gradient(120deg, #87CEEB 0%, #1A73F8 100%)",
];

const cardStyle = (active, idx) => ({
  background: cardColors[idx % cardColors.length],
  borderRadius: "18px",
  boxShadow: active
    ? "0 6px 24px #4285F480, 0 0 0 4px #F4F6F8"
    : "0 2px 10px #4285F430",
  padding: "28px 24px",
  margin: "0 0 18px 0",
  color: "#fff",
  cursor: "pointer",
  transition: "transform 0.2s, box-shadow 0.2s",
  transform: active ? "scale(1.04)" : "scale(1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  position: "relative",
});

const buttonStyle = {
  marginTop: "14px",
  background: "#F4F6F8",
  color: "#4285F4",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  padding: "9px 18px",
  fontFamily: "'Gatto', Arial, sans-serif",
  fontSize: "1.04rem",
  cursor: "pointer",
  boxShadow: "0 2px 8px #4285F420",
  transition: "background 0.18s",
  textDecoration: "none",
};

const projects = [
  {
    title: "Personal Website",
    description: "A portfolio website to showcase my projects and skills.",
    link: "https://fredDecodes.github.io/portfolio-app/",
  },
  {
    title: "NoteKeeper",
    description: "A simple note-taking app built with React and mongodb.",
    link: "https://fredDecodes.github.io/NoteKeeper/",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h2>Projects</h2>
      {/* <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description}{" "}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul> */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginTop: "32px",
          justifyContent: "center",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.name}
            style={cardStyle(activeIndex === idx, idx)}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            tabIndex={0}
            aria-label={project.name + " project card"}
          >
            <div
              style={{
                fontFamily: "'Gatto', Arial, sans-serif",
                fontSize: "1.38rem",
                marginBottom: "8px",
                letterSpacing: "1.2px",
              }}
            >
              {project.name}
            </div>
            <div
              style={{
                fontSize: "1.07rem",
                fontFamily: "'Times New Roman', Times, serif",
                marginBottom: "12px",
                color: "#F4F6F8",
                textShadow: "0 1px 3px #4285F490",
              }}
            >
              {project.description}
            </div>
            <a
              href={project.link}
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore
            </a>
            {/* Decorative corner accent */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                right: "18px",
                fontSize: "1.2rem",
                color: "#F4F6F8",
                opacity: activeIndex === idx ? 0.9 : 0.6,
                transition: "opacity 0.2s",
              }}
            >
              ✦
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
