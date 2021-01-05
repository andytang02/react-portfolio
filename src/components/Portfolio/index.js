import React from 'react';
import Project from '../Project';

function Portfolio() {

  return (
    <section className="my-5">
      <h1 class = "page-header">Portfolio</h1>
      <div class="projects-container">
          <Project index = {0}></Project>
          <Project index = {1}></Project>
          <Project index = {2}></Project>
          <Project index = {3}></Project>
          <Project index = {4}></Project>
          <Project index = {5}></Project>
      </div>
    </section>
  );
}

export default Portfolio;