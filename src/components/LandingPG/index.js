import React from 'react';
import './landingPg.css';

export default function LandingPg() {
  return (
    <div>
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
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
