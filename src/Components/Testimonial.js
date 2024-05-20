import React,{useRef} from 'react';
import next_icon from '../../src/assets2/next-icon.png';
import back_icon from '../../src/assets2/back-icon.png';
import user_1 from '../../src/assets2/user-1.png';
import user_2 from '../../src/assets2/user-2.png';
import user_3 from '../../src/assets2/user-3.png';
import user_4 from '../../src/assets2/user-4.png';

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
  return (
   
    <div className='testimonial'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider} >
        <li> 
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Raiba Shakeel</h3>
                  <span>Recimotech,Srinagar</span>
                </div>
              </div>
              <p>Its really greatful to be the student of recimotechsolution.I found your approach to be highly effective in blending theoretical concepts with hands-on practical exercises. One of the best Institute to learn data-science and other programming languages. Recimotech Solutions is more than an institute, it's where dreams come true. Grateful for the opportunity to grow here.</p>
            </div> 
          </li>
          <li> 
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Azlnaan</h3>
                  <span>Recimotech,Srinagar</span>
                </div>
              </div>
              <p>I wholeheartedly recommended  RecimoTech Solution to everyone looking to pursue a career in software development,web development & app development . The institute's well-structured curriculum, outstanding instructors, top-notch facilities, and excellent career support make it a standout choice for aspiring software professionals.</p>
            </div>
          </li>
          <li> 
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Malees Bhat</h3>
                  <span>Recimotech,Srinagar</span>
                </div>
              </div>
              <p>Recimo Tech's web development journey has been amazing! Exceptional facilities and courses, an outstanding teacher, and a friendly community make learning delightful. Each class is a perfect blend of fun and learning. Collaborating with fellow learners enhances technical and teamwork skills. Highly recommend for an exceptional education!</p>
            </div>
          </li>
          <li> 
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Kaiser Malik</h3>
                  <span>Recimotech,Srinagar</span>
                </div>
              </div>
              <p>Recimo Tech Solutions is one of the best training Institute offers high-quality programming courses with knowledgeable instructor, comprehensive curriculum, up-to-date materials, and excellent learning environment. Highly recommend for anyone looking to acquire programming skills and advance their career in the technology field.</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Testimonial;
