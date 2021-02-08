import React from 'react';
import {Link} from 'react-router-dom';
import '.././home.css'

function Home() {
 
   
  return (
    <>
    <div className="home">
      <div className="homeBackground">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
      
      
      <div className="textContainer">
          <h1><span>HI,<br/>
          I'M TEHREEM SULTAN,<br/>
          WEB DEVELOPER</span><br/>
          <Link to='/projects'><button>See my work</button></Link>
          <Link to='/contacts'><button>Contact me</button></Link>
         </h1>
      </div>
    </div>

    </>
  );}


export default Home;