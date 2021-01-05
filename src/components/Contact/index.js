import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } 
        else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section>
          <h1 className="page-header">Contact Me</h1>
          <div className = "contact">
            <form className = "contact-form" id="contact-form" onSubmit={handleSubmit}>
                <div className = "contact-group">
                    <label className = "contact-label" htmlFor="name">Name:</label>
                    <textarea className = "contact-text" type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div className = "contact-group">
                    <label className = "contact-label"  htmlFor="email">Email address:</label>
                    <textarea className = "contact-text" type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div className = "contact-group">
                    <label className = "contact-label"  htmlFor="message">Message:</label>
                    <textarea className = "contact-text contact-larger" name="message" defaultValue={message} onChange={handleChange} />
                </div>
                {errorMessage && (
                    <div className = "contact-error">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className = "contact-button" data-testid="button" type="submit">Submit</button>
            </form>
          </div>
        </section>
    )
}
    
export default Contact;