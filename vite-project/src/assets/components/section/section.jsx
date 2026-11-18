import React from 'react';
import './section.scss';
import heroImg from '../icons/fon.png';
import checkIcon from '../icons/tick-circle.svg';

const Section = () => {
  return (
    <section className="sec1-wrap">
      <div className="sec1">
        <div className="hero-text">
          <h1>
            Make Your Life Easier <br />
            To Manage Finances
          </h1>

          <p>
            Financing is not a loan, so guarantee is not required as it is a revenue
            based funding solution that has no impact on company’s credit score.
          </p>

          <form className="mail-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter Your Email..."
              required
            />
            <button type="submit">Get Started</button>
          </form>

          <div className="check-row">
            <img src={checkIcon} alt="" />
            <span>Full access. No Credit card required</span>
          </div>
        </div>

        <div className="hero-pic">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section;