import React from 'react';
import '../styles/components/nav.scss';
import PS4Logo from '../assets/icons/ps4-logo.png'
import { NavItem } from '../static/navItem';
const Nav = () => {

  return (
    <div className='nav'>
      <div className='sub'>
         <div className='img-box'>
          <img src={PS4Logo} alt="PS4Logo" />
         </div>
         <div className="menu-box">
          {
            NavItem.map((item)=>{
              return(
                <div className='item'>
                   {item.name}
                </div>
              )
            })
          }
         </div>
      </div>
    </div>
  );
};

export default Nav;
