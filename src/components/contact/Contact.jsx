import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('portfolio-email', 'template_gjf9ck8', form.current, 'LdF0TzWkQetOd7Mt-')
         e.target.reset();
      };
    return (
        <section className = "contact section" id= "contact">
            <h2 className = "section_title">Get in touch</h2>
            <span className="section_subtitle">Contact me</span>

            <div className= "contact_container container grid">
                <div className = "contact_content">
                    <h3 className ="contact_title">Say hi to me</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">yufei.sun64@gmail.com</span>

                            <a href ="#" className="contact_button">Write me en email
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                        
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp  contact_card-icon"></i>

                            <h3 className="contact_card-title">WhatsApp</h3>
                            <span className="contact_card-data">0871946593</span>

                            <a href ="#" className="contact_button">Send me a message
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className ="contact_content">
                    <h3 className ="contact_title">Tell me about your project</h3>

                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input
                             type="text"
                             name="name"
                             className="contact_form-input"
                             placeholder="Insert your name"></input>
                        </div>
                        
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Email</label>
                            <input
                             type="email"
                             name="email"
                             className="contact_form-input"
                             placeholder="Insert your email"></input>
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <label className="contact_form-tag">Project</label>
                            <textarea
                              name="project"
                              cols="30"
                              rows="10" 
                              className="contact_form-input"
                              placeholder="Tell me about your project"
                              ></textarea>
                        </div>

                        <button className="button button--flex">Send message</button>
                    </form>
                </div>
                    
            </div>

        </section>

    )
}

export default Contact;

