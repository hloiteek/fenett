import React from 'react';
import './Footer.scss';

import logoIcon from '../icons/Icon.png';
import appleIcon from '../icons/apple.png';
import playIcon from '../icons/google-play.png';
import socials from '../icons/Social Media.png';

const Footer = () => {
  return (
    <footer className="foot-wrap">
      <div className="foot">
        
        <div className="top-part">
          
          <div className="brand">
            <a href="/" className="logo-box">
              <img src={logoIcon} alt="" />
              <span>Fenet</span>
            </a>
            <p>
              We built an elegant solution. Our team<br />
              believe that the success of our company<br />
              is a result of our clients growth.
            </p>
            <img src={socials} alt="" className="soc-icons" />
          </div>

          <div className="cols">
            
            <div className="col">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Jobs</a>
              <a href="#">Blog</a>
              <a href="#">Career</a>
            </div>

            <div className="col">
              <h4>Product</h4>
              <a href="#">Finan Software</a>
              <a href="#">Features</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Status</a>
              <a href="#">API</a>
            </div>

            <div className="col">
              <h4>Discover</h4>
              <a href="#">Partner Program</a>
              <a href="#">Newsletter</a>
              <a href="#">How It works</a>
              <a href="#">Case Studies</a>
              <a href="#">Team of Service</a>
            </div>

            <div className="col">
              <h4>Help Center</h4>
              <a href="#">Community</a>
              <a href="#">Knowledge</a>
              <a href="#">Terms & Condition</a>
              <a href="#">Privacy</a>
              <a href="#">Support</a>
            </div>

          </div>

        </div>

        <div className="bot-part">
          <span className="copy">© 2022. All rights reserved.</span>

          <div className="apps">
            <span className="app-title">Discover our app</span>

            <a href="#" className="store-btn">
              <img src={appleIcon} alt="" />
              <div className="txt">
                <small>Download on the</small>
                <b>App Store</b>
              </div>
            </a>

            <a href="#" className="store-btn">
              <img src={playIcon} alt="" />
              <div className="txt">
                <small>Download on the</small>
                <b>Google Play</b>
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;