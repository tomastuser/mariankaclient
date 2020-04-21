import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ navLinks }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className='nav'>
      <div
        className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      ></div>
      <div className='spacer'></div>
      <div onClick={() => setNavOpen((navOpen) => (navOpen = false))}>
        <div className='logo'>
          <div className='logoCont'>
            <Link to='/'>
              <img src='https://res.cloudinary.com/tomastuser/image/upload/v1587164936/marianka-logo_jo1a9u.png'></img>
            </Link>
          </div>
          <div className='logoText'>
            <Link to='/'>
              <h1>Mariánka</h1>
              <p>Lesní mateřská škola v Brně-Líšni</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          navOpen ? 'navLinks sideNavActive sideNavSpacer' : 'navLinks'
        }
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      >
        <ul>
          {navLinks.map((link) => (
            <li>
              <Link to={link.path}>{link.name}</Link>
              <ul className='subNav'>
                {link.subNavLinks.map((subLink) => (
                  <li>
                    <Link to={{ pathname: subLink.path, state: subLink.state }}>
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
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
