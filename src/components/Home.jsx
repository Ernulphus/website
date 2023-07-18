import selfie from './../selfie.jpg'

function Home () {
    return (<div style={{display:"flex", justifyContent:"center", width:"100%"}}>
      
      <img src={selfie} alt="Boaz looking enigmatically out a window in the Met cloisters."/>      

      <p className="bio">
          <b>Boaz Kaufman</b> is a Python, C++, and JavaScript programmer based in New York City. They graduated magna cum laude from CUNY Macaulay Honors College in 2022 majoring in Computer Science and Classical Studies and minoring in Music and Mathematics. After college, they interned at the Department of Education's Security Incident Response Team, where they investigated and remediated compromised user accounts on a network of several million hosts. They currently teach computer science at East Harlem Scholars Academy High School. When they aren't programming, they read science fiction and write poetry.
      </p>
      
      </div>)
}

export default Home;