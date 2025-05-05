import './Home.css';
import { bioText, coverPhoto } from './../constants';

function Home () {

  const selfieAlt = "Boaz up at the Edge."

  return (    
    <div className='home'>
      <img className="home-photo" src={coverPhoto} alt={selfieAlt}/>      

      <div className="bio">
          {bioText}
      </div>
      
    </div>
  )
}

export default Home;