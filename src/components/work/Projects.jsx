import React from 'react';
import { projectsData, projectsNav } from './Data';
import ProjectItems from './ProjectItems';

function Projects() {
  return (
    <div>
      <div className="project__filters">
        {projectsNav.map((item, index) => {
          return (
            <span className="project__item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="project__container container grid">
        {projectsData.map((item) => {
            return <ProjectItems item={item} key={item.id} />
        })}
      </div>
    </div>
  );
}

export default Projects