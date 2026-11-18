import React from 'react';
import './AccessSection.scss';
import chel from '../icons/chel.png';

const AccessSection = () => {
  return (
    <section className="sec3-wrap">
      <div className="sec3">
        
        <div className="left">
          <h2>
            Everyone Should<br />
            Have Access To<br />
            Financial Services
          </h2>
          <p>
            FINAN offers the best-known free budgeting app on<br />
            the market. It’s a great option for anyone looking to<br />
            improve their spending habits.
          </p>
          <button type="button" className="try-btn">Try for Free</button>
        </div>

        <div className="mid">
          <img src={chel} alt="" className="man-img" />
        </div>

        <div className="right">
          <div className="row">
            <h3>Send</h3>
            <p>
              You can pay anyone, instantly,<br />
              it’s easy than you think.
            </p>
          </div>

          <div className="row">
            <h3>Spend</h3>
            <p>
              You can spend money, instantly,<br />
              it’s easy than you think.
            </p>
          </div>

          <div className="row">
            <h3>Bank</h3>
            <p>
              You can use any bank, instantly,<br />
              it’s easy than you think.
            </p>
          </div>

          <div className="row">
            <h3>Invest</h3>
            <p>
              You can invest, buy stock, it’s<br />
              easy than you think.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AccessSection;