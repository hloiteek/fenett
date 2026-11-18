import React, { useState } from 'react';
import './TeamSection.scss';

import img1 from '../icons/Image (2).png';
import img2 from '../icons/Image.png';
import img3 from '../icons/Image (1).png';
import socials from '../icons/Social Media.png';
import arrow from '../icons/left.svg';

const members = [
  { id: 1, name: 'Jenny Wilson', role: 'Founder & CEO', img: img1 },
  { id: 2, name: 'Arlene McCoy', role: 'Project Manager', img: img2 },
  { id: 3, name: 'Albert Flores', role: 'Developer', img: img3 },
];

const TeamSection = () => {
  const [step, setStep] = useState(0);

  
  const list = [...members, ...members];

  const moveLeft = () => {
    setStep((prev) => (prev + 1) % members.length);
  };

  return (
    <section className="sec6-wrap">
      <div className="sec6">
        
        <div className="title-box">
          <h2>We Have Expert Team</h2>
          <p>Meet our expert management team members</p>
        </div>

        <div className="slider-box">
          
          <button type="button" className="nav-circle" onClick={moveLeft}>
            <img src={arrow} alt="" className="arr-left" />
            <img src={arrow} alt="" className="arr-right" />
          </button>

          <div className="window">
            <div 
              className="track" 
              style={{ transform: `translateX(-${step * 386}px)` }}
            >
              {list.map((item, idx) => (
                <div className="card" key={idx}>
                  <img src={item.img} alt={item.name} className="photo" />
                  <div className="bot">
                    <div className="who">
                      <h3>{item.name}</h3>
                      <span>{item.role}</span>
                    </div>
                    <img src={socials} alt="" className="soc" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamSection;