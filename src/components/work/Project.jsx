import React from 'react';
import './project.css';
import Projects from './Projects';

function Project() {
  return (
   <section className="work section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">My Most Recent Projects</span>

    <Projects />
   </section>
  )
}

export default Project