import React from 'react';
import './portfolio.css';

export default function PortfolioSec() {
  return (
    <div>
      <div id='portfolio'></div>
      <div className='row secondCol'>
        {/* First Col */}

        <div className='col-lg-4 text-center'>
          <div className='portfolioSection '>
            <h2 className='col1Text'>Portfolio</h2>
            <p className='col1secondText'>Feel free to look around</p>
            <div className='row'>
              <a
                target='_blank'
                href='https://github.com/Sinuhem23/'
                className=' btn btnToView'
              >
                View My GitHub
              </a>
            </div>
            <div className='row'>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1Iccbu3ZPGtdOAee5X_l0Kn0YE5W7-Uka/view?usp=sharing'
                className=' btn btnToView'
              >
                View My Resume
              </a>
            </div>
            <div className='row '>
              <a href='#footer' className=' footerArrow'>
                <i className='fas fa-sort-down'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Second Col */}
        <div className='col-lg-8 '>
          {/* Row 1 */}
          <div className='row firstTextRow'>
            <div className='col-md-4 btn'>
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
              <div
                className='card-img-top muscleCar'
                alt='Muscle-Car-Game'
              ></div>
              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://shielded-spire-69074.herokuapp.com/'
                >
                  <p className='card-text  btn'>Muscle-Car-Game</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <div
                className='card-img-top nodeGuessingGame'
                alt='Node-Guessing-Game'
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
                <a target='_blank' href='https://nagle-parking.herokuapp.com/'>
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
    </div>
  );
}
