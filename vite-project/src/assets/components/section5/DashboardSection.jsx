import React from 'react';
import './DashboardSection.scss';

import userIcon from '../icons/user.png';
import twoUserIcon from '../icons/twouser.png';
import dashImg from '../icons/Dashboard.png';

const DashboardSection = () => {
  return (
    <section className="sec4-wrap">
      <div className="sec4">
        
        <div className="top-bar">
          <h2>
            A Clean & Easy To Use<br />
            Experience In One App
          </h2>

          <div className="tabs">
            <button type="button" className="tab active">
              <img src={userIcon} alt="" />
              <span>Business Account</span>
            </button>
            <button type="button" className="tab">
              <img src={twoUserIcon} alt="" />
              <span>Management Account</span>
            </button>
          </div>
        </div>

        <div className="dash-box">
          <img src={dashImg} alt="Dashboard" className="dash-img" />
        </div>

      </div>
    </section>
  );
};

export default DashboardSection;