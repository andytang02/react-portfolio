import React from 'react';

function Resume() {

  return (
    <section className="my-5">
      <h1>Resume</h1>
      <h3>Download my resume <a href = {require("../../assets/Resume.pdf").default} download="Resume.pdf"> here </a></h3>
      <h5>Languages: Java, C/C++, Python, Javascript, HTML/CSS, R</h5>
      <h5>Proficiencies: MongoDB, Express.js, React.js, Node.js, MySQL</h5>
    </section>
  );
}

export default Resume;