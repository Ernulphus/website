import selfie from './../Goggles.jpg';
import './Home.css';
import { bioText } from './../constants';

function Home () {

  const selfieAlt = "Boaz wearing cool goggles."

  return (    
    <div className='home'>
      <img className="home-selfie" src={selfie} alt={selfieAlt}/>      

      <p className="bio">
          {bioText}
      </p>
      
    </div>
  )
}

export default Home;