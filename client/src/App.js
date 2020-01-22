import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

import './home.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
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

          {/* <a
          className='navbar-brand btn btn-warning portfolioBTN'
         
        >
          Portfolio
        </a> */}
        </nav>
        <div className='backgroundImg '>
          <div className='backgroundText container'>
            <div className='row innerText1'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <h1 className='col-md-4 innerFont1'>Sinuhe Montero</h1>
            </div>
            <div className='row innerText2'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <h6 className='col-md-4 innerFont2'>
                A look into my digital life.
              </h6>
            </div>

            <div className='row'>
              <div className='col-md-4'></div>
              <div className='col-md-4'></div>
              <a className='col-md-4 btn btnContinue' href='#quote'>
                Continue
              </a>
            </div>
          </div>
        </div>
        <div id='quote'></div>
        <p class='expressionText'>
          One of the most important aspects for me as a Software Engineer is the
          freedom in expression via technology.
          <a href='#portfolio' class=' btn continueBTN'>
            {' '}
            Continue
          </a>{' '}
          to engage in some of my work.
        </p>
        <div id='portfolio'></div>
        <div className='row secondCol'>
          {/* First Col */}

          <div className='col-lg-4 '>
            <div className='portfolioSection '>
              <h2 className='col1Text'>Portfolio</h2>
              <p className='col1secondText'>Feel free to look around</p>

              <a
                target='_blank'
                href='https://github.com/Sinuhem23/'
                className=' btn btnGitHub'
              >
                View My GitHub
              </a>
            </div>
          </div>

          {/* Second Col */}
          <div className='col-lg-8 '>
            {/* Row 1 */}
            <div className='row firstTextRow'>
              <div className='col-md-4 cardControl btn'>
                <div className='card-img-top triviaGame' alt='Trivia'></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://sinuhem23.github.io/TriviaGame/'
                  >
                    <p className='card-text btn'>Trivia</p>
                  </a>
                </div>
              </div>
              <div className='col-md-4 btn'>
                <div className='card-img-top gifTastic' alt='GifTastic'></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://sinuhem23.github.io/GifTastic/'
                  >
                    <p className='card-text btn'>GifTastic</p>
                  </a>
                </div>
              </div>
              <div className='col-md-4 btn'>
                <div
                  className='card-img-top nodeGuessingGame'
                  alt='Make Up Remover'
                ></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://github.com/Sinuhem23/Node-Guessing-Game'
                  >
                    <p className='card-text btn'>Node-Guessing</p>
                  </a>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className='row secondTextRow'>
              <div className='col-md-4 btn'>
                <div
                  className='card-img-top nagleParking'
                  alt='Nagle-Parking'
                ></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://nagle-parking.herokuapp.com/'
                  >
                    <p className='card-text btn'>Nagle-Parking</p>
                  </a>
                </div>
              </div>
              <div className='col-md-4 btn'>
                <div className='card-img-top launchPad' alt='Launch-Pad'></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://tomrennhack.github.io/Project-1-LaunchPad/index.html'
                  >
                    <p className='card-text btn'>Launch-Pad</p>
                  </a>
                </div>
              </div>
              <div className='col-md-4 btn'>
                <div className='card-img-top sipNLearn' alt='Sip-N-Learn'></div>
                <div className='card-body'>
                  <a
                    target='_blank'
                    href='https://obscure-ravine-26191.herokuapp.com/'
                  >
                    <p className='card-text btn'>Sip-N-Learn</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <p className='backgroundImg2'></p>
      </div>
    </Router>
  );
}

export default App;