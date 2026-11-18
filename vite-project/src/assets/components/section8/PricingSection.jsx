import React from 'react';
import './PricingSection.scss';

import singleImg from '../icons/Single.png';
import agencyImg from '../icons/Agency.png';
import companyImg from '../icons/Company.png';

const PricingSection = () => {
  return (
    <section className="sec7-wrap">
      <div className="sec7">
        
        <div className="head">
          <h2>Transparent Pricing for You</h2>
          <p>Start saving time today and choose your best plan</p>
        </div>

        <div className="plans">
          
          <div className="plan-card">
            <div className="card-body">
              <img src={singleImg} alt="Single" className="banner" />
              <h3 className="price">$25 USD</h3>
              
              <div className="features-list">
                <span>Unlimited Links</span>
                <span>Up to 10 Blocks</span>
                <span>Chat Support</span>
              </div>

              <div className="bot-part">
                <span className="ver">Verified</span>
                <button type="button" className="sub-btn">1 Month Subscription</button>
              </div>
            </div>
          </div>

          <div className="plan-card active">
            <div className="card-body">
              <img src={agencyImg} alt="Agency" className="banner" />
              <h3 className="price">$55 USD</h3>
              
              <div className="features-list">
                <span>Unlimited Links</span>
                <span>Up to 15 Blocks</span>
                <span>Chat Support</span>
                <span>Api Integrations</span>
              </div>

              <div className="bot-part">
                <span className="ver">Verified</span>
                <button type="button" className="sub-btn blue">1 Month Subscription</button>
              </div>
            </div>
          </div>

          <div className="plan-card">
            <div className="card-body">
              <img src={companyImg} alt="Company" className="banner" />
              <h3 className="price">$95 USD</h3>
              
              <div className="features-list">
                <span>Unlimited Links</span>
                <span>Up to 20 Blocks</span>
                <span>Chat Support</span>
                <span>Api Integrations</span>
              </div>

              <div className="bot-part">
                <span className="ver">Verified</span>
                <button type="button" className="sub-btn">1 Month Subscription</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;