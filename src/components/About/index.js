import React from 'react';

function About() {

  return (
    <section className="my-5">
      <h1>About Me</h1>
      <div className = "flex-row space-around">
        <img src={require("../../assets/pfp.jpeg").default} className="my-2" style={{ width: "33%" }} alt="Profile Picture" />
        <h3>
            I'm currently a first year student at UCLA pursuing a double major in Math and Computer Science. 
            I have experience in full-stack web development, machine learning, and algorithmic problem solving. 
            I love fitness, music, and comedy.
        </h3>
      </div>
    </section>
  );
}

export default About;