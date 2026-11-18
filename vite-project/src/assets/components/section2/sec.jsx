import React from 'react';
import './sec.scss';
import aromix from '../icons/aromix.png'
import fireli from '../icons/fireli.png'
import martino from '../icons/martino.png'
import vertex from '../icons/vertex.png'
import stone from '../icons/stone.png'

const Sec = () => {
  return (
    <section className="company">
        <div className='pred'>
            <div className='zag'>
                <h1>50+ Company Worldwide Has Showed Interest to Our New SAAS Tool</h1>
            </div>
            <div className='brand'>
                <img src={vertex} alt="" />
                <img src={stone} alt="" />
                <img src={aromix} alt="" />
                <img src={martino} alt="" />
                <img src={fireli} alt="" />
            </div>
        </div>
    </section>
  );
};

export default Sec;