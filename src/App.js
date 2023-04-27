
import profile_img from "./assest/WhatsApp Image 2023-04-26 at 9.53.40 PM.jpeg";
import work1 from "./assest/Screenshot 2023-04-26 at 10.58.03 PM.png";

import work2 from "./assest/Screenshot 2023-04-26 at 10.58.18 PM.png";
import work3 from "./assest/Screenshot 2023-04-26 at 10.59.19 PM.png"
import './App.css';

function App() {
  return (
    <div>
      <div className='profile-card'>
      <div  className="profile-img-card" >
            <img  className="profile-img" src={profile_img} alt="no img" />
          </div>


        <div className='profile-desc'>
              <h1 className='profile-h'>Hi, I am Ayush</h1>
              <p className='profile-p'>I am a Frontend Web Developer / Web Designer</p>
              <a href="https://www.linkedin.com/in/ayush-mutum-256b80262/" className="btn">Contact Me</a>
        </div>

       
       

      </div>


      <div className="work-card">
        
        <h1 className="work-h"> My Works/Projects</h1>


          <div className="work">

    
        
        <div  className="work-img-card" >
            <img  className="work-img" src={work1} alt="no img" />
            <a className="work-link" href="https://chegg-clone-xi.vercel.app/">Chegg Clone</a>
            
          </div>
          <div  className="work-img-card" >
            <img  className="work-img" src={work2} alt="no img" />
            <a  className="work-link" href="https://movie-details-fetcher.vercel.app/">Movie Detail fetcher</a>
            
          </div>
          <div  className="work-img-card" >
            <img  className="work-img" src={work3} alt="no img" />
            <a className="work-link" href="https://foodhub-three.vercel.app/">Food ordering website</a>
          
          </div>
        
          </div>



          <div className="about">
            <h1>About Me</h1>
            <p>My name is Ayush Mutum. I am from Manipur. Currently Studying Computer Science Engineering at NERIST.</p>
            <p></p>
          </div>
      </div>


      

      </div>
  );
}

export default App;
