import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return(
    <header>
      <nav>
        <div className='toggler'></div>  
        <div className='logo'><Link to='/'>logo</Link></div>  
        <div className='links'>
          <ul className='list'>
            <li><Link className="check" to='/'>Home</Link></li>
            <li><Link className="check" to='/aboutme'>Aboutme</Link></li>
            <li><Link className="check" to='/projects'>projects</Link></li>
            <li><Link className="check" to='/contactme'>contactme</Link></li>
          </ul>
        </div>        
      </nav>
    </header>
  );
}

export default Header;