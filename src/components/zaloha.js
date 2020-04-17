import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ navLinks }) {
  const [navOpen, setNavOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  return (
    <div className='nav'>
      <div
        className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      ></div>
      <div className='spacer'></div>
      <div
        className='logo'
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      >
        <Link to='/'>
          <h1>Mariánka</h1>
          <p>Lesní mateřská škola</p>
        </Link>
      </div>
      <ul
        className={navOpen ? 'nav-links nav-active sideNavSpacer' : 'nav-links'}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      >
        {navLinks.map((link) => (
          <ul>
            <Link to={link.path}>
              <li>
                {link.name}
                <ul className='subNav'>
                  {link.subNavLinks.map((subLink) => (
                    <Link to={subLink.path}>
                      <li>{subLink.name}</li>
                    </Link>
                  ))}
                </ul>
              </li>
            </Link>
          </ul>
        ))}
      </ul>
      <div className='burger-container'>
        <div className='burger' onClick={() => setNavOpen(!navOpen)}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
