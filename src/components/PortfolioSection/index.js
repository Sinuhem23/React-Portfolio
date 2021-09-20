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
                className=' btn btnToView '
              >
                View My GitHub
              </a>
            </div>
            <div className='row '>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1voWY6M-LKZN1q4fOOeWrkpSE_2Ae9l_D/view?usp=sharing'
                className=' btn btnToView '
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
            <div className='col-md-4 btn '>
              <a target='_blank' href='https://www.borobabi.com/'>
                <div
                  className='card-img-top w3-animate-zoom w3-center boroBabi'
                  alt='Borobabi'
                >
                  {' '}
                </div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='https://www.borobabi.com/'>
                  <p className='card-text btn appButtons'>Borobabi</p>
                </a>
              </div>
            </div>

            <div className='col-md-4 btn '>
              <a target='_blank' href='http://essentialsbyem.com/'>
                <div
                  className='card-img-top w3-animate-zoom w3-center essentialsByEm'
                  alt='Essentials-By-Em'
                ></div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='http://essentialsbyem.com/'>
                  <p className='card-text btn appButtons'>Essentials By Em</p>
                </a>
              </div>
            </div>

            <div className='col-md-4 btn'>
              <a target='_blank' href='https://sinuhem23.github.io/TriviaGame/'>
                <div
                  className='card-img-top w3-animate-zoom w3-center triviaGame'
                  alt='Trivia'
                ></div>
              </a>
              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://sinuhem23.github.io/TriviaGame/'
                >
                  <p className='card-text btn appButtons'>Trivia</p>
                </a>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row secondTextRow'>
            <div className='col-md-4 w3-animate-zoom w3-center btn'>
              <a target='_blank' href='https://nagle-parking.herokuapp.com/'>
                <div
                  className='card-img-top nagleParking'
                  alt='Nagle-Parking'
                ></div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='https://nagle-parking.herokuapp.com/'>
                  <p className='card-text btn appButtons'>Nagle-Parking</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <a
                target='_blank'
                href='https://tomrennhack.github.io/Project-1-LaunchPad/index.html'
              >
                <div
                  className='card-img-top w3-animate-zoom w3-center launchPad'
                  alt='Launch-Pad'
                ></div>
              </a>

              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://tomrennhack.github.io/Project-1-LaunchPad/index.html'
                >
                  <p className='card-text btn appButtons'>Launch-Pad</p>
                </a>
              </div>
            </div>

            <div className='col-md-4 btn'>
              <a
                target='_blank'
                href='https://shielded-spire-69074.herokuapp.com/'
              >
                <div
                  className='card-img-top w3-animate-zoom w3-center muscleCar'
                  alt='Muscle-Car-Game'
                ></div>
              </a>
              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://shielded-spire-69074.herokuapp.com/'
                >
                  <p className='card-text  btn appButtons'>Muscle-Car-Game</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
