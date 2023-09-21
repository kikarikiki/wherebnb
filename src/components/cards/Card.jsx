import React from 'react';
import './cards.scss';

export default function Card(props) {

  return (
    <>
      <div className="card col-sm-8 col-md-6 col-lg-3 mb-3 p-0">
        <span className='booking-status position-absolute badge bg-light text-dark'>SOLD OUT</span>
        <img src={`../../public/images/${props.coverImg}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className='card-stats d-flex align-items-center text-secondary'>
            <i><img src="../../public/images/star.png" alt="" /></i>
            <span className="card-rating">{props.rating}</span>
            <span className="card-reviewCount">({props.reviewCount}) • </span>
            <span className="country">{props.location}</span>
          </div>
          <p className="card-text">{props.title}</p>
          <p className="card-price-person"><strong>From {props.price}€ </strong><small className="text-secondary">/ person</small></p>
        </div>
      </div>
    </>
  )
}
