import React from 'react'

function ProjectItems({item}) {
  return (
    <div className="project__card" key={item.id}>
      <img src={item.image} alt="" className="project__img" />
      <h3 className="project__title">{item.title}</h3>
      <h2 className="project__subtitle">{item.subtitle}</h2>
      <a href={item.link} className="project__button">
        Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
      <a href={item.github} className="project__button">
        Github <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </div>
  );
}

export default ProjectItems