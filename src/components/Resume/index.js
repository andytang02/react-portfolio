import React from 'react';

function Resume() {

  return (
    <section className="resume">
      <h1 className = "page-header">Resume</h1>
      <div className = "resume-text">
        <h3>Download my resume <a href = {require("../../assets/Resume.pdf").default} download="Resume.pdf"> here </a></h3>
        <div className = "resume-filler">
          <h6>Languages: </h6>
          <h5>Java, C/C++, Python, Javascript, HTML/CSS, R</h5>
        </div>
        <div className = "resume-filler">
          <h6>Frameworks: </h6>
          <h5>MongoDB, Express.js, React.js, Redux, Node.js, GraphQL, MySQL</h5>
        </div>
        <div className = "resume-filler">
          <h6>Selected Coursework: </h6>
          <h5>Multivariable Calculus, Linear Algebra, Discrete Math, Intro to Computer Science</h5>
        </div>
        <div className = "resume-filler">
          <h6>Awards: </h6>
          <h5>USACO Finalist, USAJMO Qualifier, AMC 10 Perfect Scorer</h5>
        </div>
        <div className = "resume-filler">
          <h6>Publications: </h6>
          <h5>Multiomics Longitudinal Modeling of Preeclamptic Pregnancies</h5>
        </div>
      </div>
    </section>
  );
}

export default Resume;