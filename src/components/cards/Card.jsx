import React from 'react';
import './cards.scss';

export default function Card() {

  return (
    <>
      <div className="card col-sm-8 col-md-6 col-lg-3 mb-3 p-0">
        <span className='booking-status position-absolute badge bg-light text-dark'>SOLD OUT</span>
        <img src="../../src/assets/images/katie-zaferes.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <div className='card-stats d-flex align-items-center text-secondary'>
            <i><img src="../../src/assets/images/star.png" alt="" /></i>
            <span className="card-rating">3</span>
            <span className="card-reviews">(3) • </span>
            <span className="country">USA</span>
          </div>
          <p className="card-text">Life lessons with Katie Zaferes</p>
          <p className="card-price-person"><strong>From 99€ </strong><small className="text-secondary">/ person</small></p>
        </div>
      </div>
    </>
  )
}
