import React from 'react';
import Image from '../assets2/aboutus.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={Image} alt="" />
      </div>
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>

        <p>Founded on the principles of academic excellence and holistic development, Recimotech Solutions is a leading institution dedicated to shaping the minds of tomorrow's leaders. With a legacy of innovation spanning 15 years, we are committed to providing a dynamic learning environment that fosters creativity, critical thinking, and collaboration.
        </p>
        <p>
          At Recimotech Solutions, we offer a diverse range of programs spanning various disciplines, all designed to meet the evolving needs of the modern world. Our esteemed faculty members, renowned for their expertise and dedication, mentor students to excel both academically and personally.
        </p>
        </div>
    </div>
  )
}

export default About;
