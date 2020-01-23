import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
        <Link to='/' className='nav-link nameText'>
          <h3>Sinuhe Montero</h3>
        </Link>
        <button
          className='navbar-toggler navbutton'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse nav-bar-margin'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav mr-auto navBtns'>
            <li className='nav-item active'>
              <Link to='/' className='nav-link portfolioBTN'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <a href='#portfolio' className='nav-link  portfolioBTN'>
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
