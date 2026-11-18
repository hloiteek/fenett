import React, { useState } from 'react';
import './BlogSection.scss';

import leftArr from '../icons/lefts.png';
import rightArr from '../icons/rights.png';
import laptopImg from '../icons/laptop.png';
import phoneImg from '../icons/phone.png';

const posts = [
  {
    id: 1,
    date: 'Published in Jun 25, 2022',
    author: 'By: Albeniz Kerry',
    title: 'How to Stretch Your Budget When Money Is Tight.',
    img: laptopImg,
  },
  {
    id: 2,
    date: 'Published in Jun 25, 2022',
    author: 'By: Albeniz Kerry',
    title: 'Planning Your Household Budget on a Limited Income.',
    img: phoneImg,
  },
];

const BlogSection = () => {
  const [idx, setIdx] = useState(0);

  const items = [...posts, ...posts];

  const nextSlide = () => {
    setIdx((prev) => (prev + 1) % posts.length);
  };

  return(
    <section className="sec8-wrap">
      <div className="sec8">
        
        <div className="head">
          <h2>Trending News From Our Blog</h2>
          <p>We believe that the success of our company is a result of our clients growth.</p>
        </div>

        <div className="slider">
          
          <button type="button" className="btn-circle" onClick={nextSlide}>
            <img src={leftArr} alt="" />
            <img src={rightArr} alt="" />
          </button>

          <div className="win">
            <div 
              className="line" 
              style={{ transform: `translateX(-${idx * 580}px)` }}
            >
              {items.map((post, i) => (
                <div className="post" key={i}>
                  <img src={post.img} alt="" className="pic" />
                  
                  <div className="meta">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>

                  <h3>{post.title}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;