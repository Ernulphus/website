import selfie from './../edge.jpg';
import './Home.css';
import { bioText } from './../constants';
import { useEffect } from "react";
import { Neko } from "./../neko/app/neko.ts"

function Home () {

  const selfieAlt = "Boaz up at the Edge."

  useEffect(() => {
    const neko = new Neko({
      nekoName: "peach",
      nekoImageUrl: "/peach.png",
      initialPosX: 1000,
      initialPosY: 50,
     });
    neko.init();

    return () => {
      neko.destroy();
    };
  }, []);

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