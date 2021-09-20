import React from 'react';
import './quote.css';
export default function Quote() {
  return (
    <div>
      <div id='quote'>
        <p class='expressionText'>
          One of the most important aspects for me as a Software Engineer is the
          freedom in expression via technology.{' '}
          <a href='#portfolio' class='btn continueBTN'>
            {' '}
            Continue
          </a>{' '}
          to engage in some of my work.
        </p>
        <div className='arrowDown'>
          <a href='#portfolio' className='downButton '>
            <i className='fas fa-sort-down'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
