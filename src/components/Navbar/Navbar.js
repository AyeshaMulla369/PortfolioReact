import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <HashLink smooth to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AYESHA
            <i class='fab fa-typo3' />
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink 
                smooth to='/#homew' 
                className='nav-links' 
                onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/#skill'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </HashLink>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;