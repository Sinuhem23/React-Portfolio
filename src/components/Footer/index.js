import React from 'react';
import './footer.css';

export default function FooterSec() {
  return (
    <div>
      <footer>
        <div className='container '>
          <div className='row '>
            <div className=' col-md-4'>
              <a href='/' className='upButton'>
                <i className='fas fa-sort-up'></i>
              </a>
            </div>

            <div id='footer' className='footer col-md-4 viewProfileBtn '>
              View my Profile:
              <div className='btn linkedinBTN'>
                <a href='https://www.linkedin.com/in/sinuhe-montero-thinkfirst/'>
                  <i className='fab  fa-linkedin linkedin'></i>
                </a>
              </div>
            </div>
            <div className='col-md-4'></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
