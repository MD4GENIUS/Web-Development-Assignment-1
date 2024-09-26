import React from 'react';

const About = () => {
  return (
    <div id='aboutdiv1'>
      <img
        id='aboutimg1'
        src='../assets/me.png'
        alt='About Me'
        style={{ width: '200px', height: 'auto' }} 
      />
      <h2 id='abouth2'>
        Name: Mohamed Meghji
        <br />
        <a href='../public/Resume.pdf'>My Resume</a> 
      </h2>
      <h3 id='abouth3'>
        Hello, I am in my third semester of the Software Engineering Technician (Online) Program at Centennial College. I enjoy gaming, playing and watching football, and love badminton as well.
      </h3>
    </div>
  );
};

export default About;
