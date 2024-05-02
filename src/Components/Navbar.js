import React from "react";
import { useState, useEffect } from "react";
// import Logo from "../assets2/TT1.png";
// import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaServicestack } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-scroll";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Courses",
      icon: <FaServicestack />
      ,
    },
    {
      text: "Testimonials",
      icon: <MdFeedback />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },

  ];
  return (
    <nav className={`container ${sticky ? 'jk' : ''}`}>
      
      <h2 className="logo">Recimotech Solutions</h2>

      <div className="navbar-links-container">
        <Link to="Hero" smooth={true} offset={0} duration={500}><a href="">Home</a></Link>
        <Link to="about" smooth={true} offset={-160} duration={500}><a href="">About</a></Link>
        <Link to="program-container" smooth={true} offset={-240} duration={500}><a href="">Courses</a></Link>
        <Link to="gallery" smooth={true} offset={-260} duration={500}><a href="">Gallery</a></Link>
        <Link to="testimonial" smooth={true} offset={-260} duration={500}><a href="">Testimonial</a></Link>
        <Link to="contact" smooth={true} offset={0} duration={-260}><button className="primary-button xx">Contact Us</button></Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};
export default Navbar;