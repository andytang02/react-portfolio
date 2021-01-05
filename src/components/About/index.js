import React from 'react';

function About() {

  return (
    <section className="my-5">
      <h1 className="page-header">About Me</h1>
      <div className = "about-container">
        <div className="about-image">
          <img src={require("../../assets/pfp.jpeg").default} alt="Profile Picture" />
        </div>
        <h3 className="about-description">
              I'm currently a first year student at UCLA pursuing a double major in Math and Computer Science. 
              I have experience in full-stack web development, machine learning, and algorithmic problem solving. 
              I love fitness, music, and comedy.
          </h3>
      </div>
    </section>
  );
}

export default About;