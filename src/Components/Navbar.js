import React from "react";
import { useState, useEffect } from "react";
import menu_icon from '../../src/assets2/menu-icon.png';
import { Link } from "react-scroll";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const[mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu =()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'jk' : ''}`}>
      
      <h2 className="logo">RT Solutions</h2>

      <div className={`navbar-links-container ${mobileMenu?'':'hide-mobile-menu'}` }>
        <Link to="Hero" smooth={true} offset={0} duration={500}><a href="">Home</a></Link>
        <Link to="program-container" smooth={true} offset={-240} duration={500}><a href="">Courses</a></Link>
        <Link to="about" smooth={true} offset={-160} duration={500}><a href="">About</a></Link>
        <Link to="gallery" smooth={true} offset={-260} duration={500}><a href="">Gallery</a></Link>
        <Link to="testimonial" smooth={true} offset={-260} duration={500}><a href="">Testimonial</a></Link>
        <Link to="contact" smooth={true} offset={0} duration={-260}><button className="primary-button xx">Contact Us</button></Link>
      </div>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
     
    </nav>
  );
};
export default Navbar;