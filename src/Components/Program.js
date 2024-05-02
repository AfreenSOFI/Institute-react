import React from 'react';
import {motion} from 'framer-motion' 
import { FaLaptopCode } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
// import digital from '../../src/assets2/d'


const Program = () => {
  return (
    <div className='program-container'>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>

        <div className='material'>

          <p className ="icon"><FaLaptopCode /></p>

          <h3>Web Development</h3>
        </div>
      </motion.div>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>

        <div className='material'>

          <p className ="icon"><FaMobileScreenButton /></p>
          <h3>Mobile Development</h3>
        </div>
      </motion.div>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>
        
        <div className='material'>
        <p className ="icon"><SiPaloaltosoftware /></p>
          <h3>Software Development</h3>
        </div>
      </motion.div>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>
        
        <div className='material'>
        <p className ="icon"><FaRecycle /></p>
          <h3 className='int'>Internships</h3>
        </div>
      </motion.div>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>
        
        <div className='material'>
        <p className ="icon"><FaLaptop /></p>
          <h3>Digital Marketing</h3>
        </div>
      </motion.div>
      <motion.div className="pgm-inner-container" whileHover={{scale:1.1}}>
        
        <div className='material'>
        <p className ="icon"><FaRocket /></p>
          <h3>Industrial Training</h3>
        </div>
      </motion.div>
    </div>
  )
}

export default Program;
