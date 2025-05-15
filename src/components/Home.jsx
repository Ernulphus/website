import './Home.css';
import { bioText, coverPhoto } from './../constants';
import ContactForm from './ContactForm/ContactForm';

function Home () {

  const selfieAlt = "Boaz up at the Edge."

  return (    
    <div className='home'>
      <img className="home-photo" src={coverPhoto} alt={selfieAlt}/>      

      <div className="bio">
        {bioText}
        <ContactForm />
      </div>
    </div>
  )
}

export default Home;