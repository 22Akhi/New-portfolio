import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import AWS from 'aws-sdk';


const Contact = () =>
{
  
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ message, setMessage ] = useState( '' );
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('service_khzm4bc', 'template_7onq3i3', form.current, 'I0Bt3cTiy8Jg2NcJmwa1c')


    AWS.config.update({
      region: 'YOUR_AWS_REGION', // Replace with your AWS region
      accessKeyId: 'YOUR_AWS_ACCESS_KEY_ID', // Replace with your AWS access key ID
      secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY' // Replace with your AWS secret access key
    });

    const lambda = new AWS.Lambda();

    const payload = {
      name,
      email,
      message
    };

    const params = {
      FunctionName: 'YOUR_LAMBDA_FUNCTION_NAME', // Replace with your Lambda function name
      InvocationType: 'Event',
      Payload: JSON.stringify(payload)
    };

    lambda.invoke(params, (err, data) => {
      if (err) {
        console.error(err);
        // Handle error
      } else {
        console.log(data);
        // Handle success
      }
    });

    // Reset form fields
    setName('');
    setEmail('');
  setMessage( '' );
  
  
 

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className = "contact__option-icon"/>
            <h4>Email</h4>
            <h5>22akhiganguli@gmail.com</h5>
            <a href= "mailto:22akhiganguli@gmail.com" target = "_blank">Send a message</a>
          </article>

              <article className="contact__option">
            <BsWhatsapp  className = "contact__option-icon"/>
            <h4>+61 401347362</h4>
            <h5>Call me or </h5>
            <a>Send a message</a>
          </article>

              <article className="contact__option">
            <BsLinkedin className = "contact__option-icon"/>
            <h4>Message me in </h4>
            <h5>Linkedin </h5>
            <a href= "https://linkedin.com/in/bganguli22" target = "_blank">Send a message</a>
          </article>

        </div>  
        {/* <form ref = {form} onSubmit= {sendEmail}>
          <input type="text" name="name" value={name} onChange={handleNameChange} placeholder="Your Full Name" required />
          <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="Your Email" />
          <textarea name="message" rows="7" value={message} onChange={handleMessageChange} placeholder="Your Message" required></textarea>
          <button type = "submit " className = "btn btn-primary"> Send Message</button>
</form> */}
      </div>
    </section>
  )
}

export default Contact