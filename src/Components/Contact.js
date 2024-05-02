import React from 'react';
// import './Contact.css';
import msg_icon from '../../src/assets2/msg-icon.png';
import mail_icon from '../../src/assets2/mail-icon.png';
import phone_icon from '../../src/assets2/phone-icon.png';
import location_icon from '../../src/assets2/location-icon.png';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f2142a3-65b4-47f5-9263-027fbe322c42");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully", data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3> Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We value your feedback and inquiries. Feel free to reach out to us via phone or email for any questions, suggestions, or collaborations. Our dedicated team is here to assist you. Connect with us today to learn more about Recimotech Solutions and how we can support your educational journey.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> info@recimotechsolutions.in, recimotechsolution@gmail.com</li>    
                <li> <img src={phone_icon} alt="" /> +91-9541284166 </li>    
                <li> <img src={location_icon} alt="" /> Karan Nagar, Srinagar, Kashmir</li>    
    
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name </label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your obile number'required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='secondary-btn'>Submit now</button>
          </form>
          <span>{result}</span>
        </div>

      
    </div>
  )
}

export default Contact
