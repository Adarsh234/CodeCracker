// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faComputer,
  faHome,
  faClose,
  faMessage
} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme !== null ? JSON.parse(savedTheme) : true;
    }); // Initially dark mode is active

    useEffect(() => {
        // Apply the dark mode or light mode on load
        if (darkMode) {
          document.body.classList.remove('light-mode');
        } else {
          document.body.classList.add('light-mode');
        }
      }, [darkMode])

    const toggleTheme = () => {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', JSON.stringify(!darkMode)); // Toggles light mode on body
    };
  return (
    <header>
      <nav className={showNav ? 'mobile-show' : ''}>
        <ul>
            <li className='code'>
                <a href='/' className='a'>
            <span className="code-icon">&lt;/&gt;</span>
            CodeCracker</a>
            </li>
            </ul>
            <ul className='ul'>
          <li><a href="/">
          <FontAwesomeIcon icon={faHome} className='font' />
          Home
          </a>
          </li>
          <li><a href="/editor">
          <FontAwesomeIcon icon={faComputer} className='font'/>
          Web Editor</a></li>
          <li><a href="/python-compiler">
          <FontAwesomeIcon icon={faComputer} className='font'/>
          Python</a></li>
          <li><a href="/ChatBot">
          <FontAwesomeIcon icon={faMessage} className='font'/>
          ChatBot</a></li>
          <li>
            <button onClick={toggleTheme} className="theme-switch">
              {darkMode ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          size="2x"
          className="close-icon"
        />
        <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        size="2x"
        className="hamburger-icon"
      />
      </nav>
    </header>
  );
};

export default Navbar;
