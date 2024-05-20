import React from 'react';
import '.././App.css';
import {motion} from 'framer-motion' 
import gallery_1 from '../../src/assets2/gal1.jpg';
import gallery_2 from '../../src/assets2/gal2.jpg';
import gallery_3 from '../../src/assets2/gal3.jpg';
import gallery_4 from '../../src/assets2/gal4.jpg';

const Gallery = () => {
    return (
        <div className='institute'>
            <div className="gallery">
                <motion.img src={gallery_1} whileHover={{scale:1.1}} alt=""/>
                <motion.img src={gallery_2} whileHover={{scale:1.1}} alt=""/>
                <motion.img src={gallery_3} whileHover={{scale:1.1}} alt=""/>
                <motion.img src={gallery_4} whileHover={{scale:1.1}} alt=""/>
            </div>
        </div>
    )
}

export default Gallery
