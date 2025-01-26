import selfie from './../edge.jpg';
import './Home.css';
import { bioText } from './../constants';

function Home () {

  const selfieAlt = "Boaz up at the Edge."

  return (    
    <div className='home'>
      <img className="home-selfie" src={selfie} alt={selfieAlt}/>      

      <div className="bio">
          {bioText}
      </div>
      
    </div>
  )
}

export default Home;