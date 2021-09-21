import React from 'react';
import './portfolio.css';

export default function PortfolioSec() {
  return (
    <div>
      <div className='row secondCol' id='portfolio'>
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
            {/* Check The News */}
            <div className='col-md-4 btn '>
              <a
                target='_blank'
                href='https://github.com/Sinuhem23/Check-The-News'
              >
                <div
                  className='card-img-top w3-animate-zoom w3-center checkTheNews'
                  alt='Check The News'
                >
                  {' '}
                </div>
              </a>

              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://github.com/Sinuhem23/Check-The-News'
                >
                  <p className='card-text btn appButtons'>Check The News</p>
                </a>
              </div>
            </div>

            {/* To Do List */}
            <div className='col-md-4 btn '>
              <a target='_blank' href='https://github.com/Sinuhem23/To_Do_List'>
                <div
                  className='card-img-top w3-animate-zoom w3-center toDoList'
                  alt='To Do List'
                ></div>
              </a>

              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://github.com/Sinuhem23/To_Do_List'
                >
                  <p className='card-text btn appButtons'>To Do List</p>
                </a>
              </div>
            </div>

            {/* Trivia Game */}
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
            {/* Movie Info App */}
            <div className='col-md-4 w3-animate-zoom w3-center btn'>
              <a
                target='_blank'
                href='https://sinuhem23.github.io/Movie-Info-App/index.html'
              >
                <div
                  className='card-img-top movieInfo'
                  alt='Movie Info App'
                ></div>
              </a>

              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://sinuhem23.github.io/Movie-Info-App/index.html'
                >
                  <p className='card-text btn appButtons'>Movie Info App</p>
                </a>
              </div>
            </div>

            {/* Groceries With React */}
            <div className='col-md-4 btn'>
              <a
                target='_blank'
                href='https://github.com/Sinuhem23/Groceries_With_React'
              >
                <div
                  className='card-img-top w3-animate-zoom w3-center groceries'
                  alt='Groceries'
                ></div>
              </a>
              <div className='card-body'>
                <a
                  target='_blank'
                  href='https://github.com/Sinuhem23/Groceries_With_React'
                >
                  <p className='card-text btn appButtons'>
                    Groceries With React
                  </p>
                </a>
              </div>
            </div>

            {/* Jeopardy */}
            <div className='col-md-4 btn'>
              <a target='_blank' href='https://github.com/Sinuhem23/Jeopardy'>
                <div
                  className='card-img-top w3-animate-zoom w3-center jeopardy'
                  alt='Jeopardy'
                ></div>
              </a>
              <div className='card-body'>
                <a target='_blank' href='https://github.com/Sinuhem23/Jeopardy'>
                  <p className='card-text  btn appButtons'>Jeopardy</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
