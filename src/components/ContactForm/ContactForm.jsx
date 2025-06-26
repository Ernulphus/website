import {useState} from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [sent, setSent] = useState(false);
  console.log(process.env.REACT_APP_EMAILJS_API_KEY);
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    emailjs.sendForm('service_53yytce', 'template_fedqvi7', e.target, process.env.REACT_APP_EMAILJS_API_KEY)
    .then((result) => {
      // window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      setSent(true);
    }, (error) => {
      console.log(error.text);
    });
  }
  
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h3>
        Or send me a message:
      </h3>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email*</label>
      <input type="email" name="from_email" required />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="html_message">
        Hi Boaz!
        I need help with this problem...
      </textarea> 
      <input type="submit" value="Send" />
      { sent && (<p>Message sent!</p>)}
    </form>
  );
}

export default ContactForm;