import React from 'react';
import './CtaSection.scss';

import pravo from '../icons/pravo.png';

const CtaSection = () => {
  return (
    <section className="sec9-wrap">
      
      <div className="bg-shapes">
        <div className="top-cyan"></div>
        <div className="big-circle"></div>
        <div className="card-cyan"></div>
        <div className="card-purple"></div>
      </div>

      <div className="sec9">
        
        <div className="cta-left">
          <h2>
            Try FINAN and see how smooth<br />
            payment operations can be...
          </h2>
          <p>
            We believe that the success of our company is a result of our clients growth.<br />
            Like what we do? Drop us a message or give us a call.
          </p>
        </div>

        <div className="cta-right">
          <button type="button" className="white-btn">
            <span>Try for Free</span>
            <img src={pravo} alt="" />
          </button>
          <span className="sub-note">Full access. No Credit card required</span>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;