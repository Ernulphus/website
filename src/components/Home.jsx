import './Home.css';
import { Link } from 'react-router-dom';
import { bioText, calendlyURL, coverPhoto } from './../constants';

function CalendarLink() {
  return (
    <div className="calendar-link" >
      <Link to={calendlyURL} target="_blank" rel="noopener noreferrer">
        <h2>Schedule a chat to discuss your needs!</h2>
      </Link>
    </div>
  )
}

function Home () {

  const selfieAlt = "Boaz up at the Edge."

  return (    
    <div className='home'>
      <img className="home-photo" src={coverPhoto} alt={selfieAlt}/>      

      <div className="bio">
        {bioText}
        <CalendarLink></CalendarLink>
        {/* <ContactForm /> */}
      </div>
    </div>
  )
}

export default Home;