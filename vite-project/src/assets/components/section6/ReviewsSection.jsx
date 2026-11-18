import React from 'react';
import './ReviewsSection.scss';

import albert from '../icons/albert.png';
import floyd from '../icons/floyd.png';
import arrow from '../icons/arrow-right.svg';

const ReviewsSection = () => {
  return (
    <section className="sec5-wrap">
      <div className="sec5">
        
        <div className="top">
          <h2>
            What Customers Are<br />
            Saying About The App
          </h2>

          <button type="button" className="stories-btn">
            <span>Customer Stories</span>
            <img src={arrow} alt="" />
          </button>
        </div>

        <div className="list">
          
          <div className="box">
            <div className="inner">
              <img src={albert} alt="" className="vid-img" />
              <div className="info">
                <p>
                  We are satisfied of their services. Put your<br />
                  trust on the app and share your growth<br />
                  Asset Management.
                </p>
                <span className="tag">Case Study</span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="inner">
              <img src={floyd} alt="" className="vid-img" />
              <div className="info">
                <p>
                  They are amazing team of experts,<br />
                  committed and experienced with a passion<br />
                  for financial markets.
                </p>
                <span className="tag">Case Study</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;