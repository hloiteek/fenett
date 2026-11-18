import React from 'react';
import './FeaturesSection.scss';

import gol from '../icons/gol.png';
import roz from '../icons/roz.png';
import sin from '../icons/sin.png';

const FeaturesSection = () => {
  return (
    <section className="sec2-wrap">
      <div className="sec2">
        
        <div className="top-text">
          <h2>
            We Strive To Offer An<br />
            Unparalleled Experience
          </h2>
          <p>
            FINAN offers the best-known free budgeting app on the market. It’s a great<br />
            option for anyone looking to improve their spending habits.
          </p>
        </div>

        <div className="cards">
          
          <div className="item">
            <img src={gol} alt="" className="icon" />
            <h3>Move money faster</h3>
            <p>
              You can transfer money electronically<br />
              fastest ways from one person to another<br />
              through a bank or a nonbank.
            </p>
            <a href="#" className="more">
              Learn More <span>→</span>
            </a>
          </div>

          <div className="item">
            <img src={roz} alt="" className="icon" />
            <h3>
              Track balances in<br />
              real time
            </h3>
            <p>
              You can transfer money electronically<br />
              fastest ways from one person to another<br />
              through a bank or a nonbank.
            </p>
            <a href="#" className="more">
              Learn More <span>→</span>
            </a>
          </div>

          <div className="item">
            <img src={sin} alt="" className="icon" />
            <h3>
              Reconcile payments<br />
              automatically
            </h3>
            <p>
              You can transfer money electronically<br />
              fastest ways from one person to another<br />
              through a bank or a nonbank.
            </p>
            <a href="#" className="more">
              Learn More <span>→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;