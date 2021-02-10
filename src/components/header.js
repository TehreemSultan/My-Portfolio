import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './sidebarData';
import ShowLoading from './showLoading'

function Header(){
 const [sidebar,setSidebar] = useState(false);
 const showSidebar = () => setSidebar(!sidebar);
 
 
  return(
    <header>
      
       <div className='navbar'>
          <Link to="#" className={sidebar ? 'menu-bars cross' : 'menu-bars'}onClick={showSidebar}><span></span><span></span><span></span><span></span></Link>
        </div> 
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
          <ul className='nav-menu-items'>
         
            {SidebarData.map((item, index) => {
              return(
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}<span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
               
      </nav>
    </header>
  );
}

export default Header;