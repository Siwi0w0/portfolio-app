import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('LdF0TzWkQetOd7Mt-');
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            const result = await emailjs.sendForm(
                'portfolio-email', 
                'template_gjf9ck8', 
                form.current, 
                'LdF0TzWkQetOd7Mt-'
            );
            
            console.log('EmailJS Result:', result);
            
            if (result.status === 200) {
                setMessage('Message sent successfully!');
                e.target.reset();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // More specific error messages
            if (error.text) {
                setMessage(`Error: ${error.text}`);
            } else if (error.message) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('Failed to send message. Please try again or contact me directly.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Say hi to me 👋</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">yufei.sun64@gmail.com</span>

                            <a href="mailto:yufei.sun64@gmail.com" className="contact_button">
                                Write me an email
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">WhatsApp</h3>
                            <span className="contact_card-data">0871946593</span>

                            <a href="https://wa.me/353871946593" className="contact_button" target="_blank" rel="noopener noreferrer">
                                Send me a message
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Tell me about your project</h3>

                    <form className="contact_form" ref={form} onSubmit={sendEmail}>
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Name</label>
                            <input
                                type="text"
                                name="from_name"
                                className="contact_form-input"
                                placeholder="Insert your name"
                                required
                            />
                        </div>
                        
                        <div className="contact_form-div">
                            <label className="contact_form-tag">Email</label>
                            <input
                                type="email"
                                name="from_email"
                                className="contact_form-input"
                                placeholder="Insert your email"
                                required
                            />
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <label className="contact_form-tag">Project</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10" 
                                className="contact_form-input"
                                placeholder="Tell me about your project"
                                required
                            ></textarea>
                        </div>

                        {message && (
                            <div className={`contact_message ${message.includes('successfully') ? 'success' : 'error'}`}>
                                {message}
                            </div>
                        )}

                        <button 
                            className="button button--flex" 
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Send message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

