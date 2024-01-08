import React from 'react';
import './work.css';
import Projects from './Projects';

function Work() {
  return (
   <section className="work section" id="portfolio">
    <h2 className="section__title">Portfolio</h2>
    <span className="section__subtitle">Most Recent Projects</span>

    <Projects />
   </section>
  )
}

export default Work