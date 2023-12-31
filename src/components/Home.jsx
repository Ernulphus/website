import selfie from './../selfie.jpg';
import './Home.css';
import { bioText } from './../constants';

function Home () {

  const selfieAlt = "Boaz smiling at the top of Niagara Falls."

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