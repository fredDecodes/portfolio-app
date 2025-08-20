import React from "react";

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
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
            <li key={index}>
                <strong>{project.title}</strong>: {project.description}{" "}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
