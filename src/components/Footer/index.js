import React from 'react';
import './footer.css';

export default function FooterSec() {
  return (
    <div>
      <footer>
        <div className='container '>
          <div className='row '>
            {/* Linkedin Link */}
            <div id='footer' className='footer col-md-4 viewProfileBtn '>
              View my Profile:
              <div className='btn linkedinBTN'>
                <a href='https://www.linkedin.com/in/sinuhe-montero-thinkfirst/'>
                  <i className='fab  fa-linkedin linkedin'></i>
                </a>
              </div>
            </div>
            <div className='col-md-4'></div>
            <div className=' col-md-4'>
              {/* Up Button */}
              <a href='#Home' className='upButton'>
                <i className='fas fa-sort-up upBtnText'>
                  <p className='upBtnText'>Top</p>
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
