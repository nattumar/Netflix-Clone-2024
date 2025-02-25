import React, { useEffect, useState } from 'react';
import "./Header.css";
import NetflixLogo from "../../Assets/images/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//Header

const Header = () => {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
  
  }, []);
  return (

      <div className={`header_outer_container ${show && "header_outer_container_black"}`}>
          <div className='header_container'>
              <div className='header_left'>
                  <ul>
                      <li><img src={NetflixLogo} alt="Netflix Logo" width="100" /></li>
                    
                      <li>Home</li>
                      <li>TVShows</li>
                      <li>Movies</li>
                      <li>Latest</li>
                      <li>MyList</li>
                      <li>Browse by Languages</li>
                  </ul>
              </div>
              <div className='header_right'>
                  <ul>
                      <li><SearchIcon /></li>
                      <li><NotificationsNoneIcon /></li>
                      <li><AccountBoxIcon /></li>
                      <li><ArrowDropDownIcon /></li>
                  </ul>
              </div>
          </div> 
    </div>
  )
}

export default Header
       