import React from 'react';
import './cards.scss';

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "BOOKED"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <>
      <a className="card mb-3 p-0">
        {badgeText && <span className='booking-status position-absolute badge bg-light text-dark'>{badgeText}</span>}
        <img src={`../../public/images/${props.item.coverImg}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className='card-stats d-flex align-items-center text-secondary'>
            <i><img src="../../public/images/star.png" alt="" /></i>
            <span className="card-rating">{props.item.stats.rating}</span>
            <span className="card-reviewCount">({props.item.stats.reviewCount}) • </span>
            <span className="country">{props.item.location}</span>
          </div>
          <p className="card-text">{props.item.title}</p>
          <p className="card-price-person"><small><strong>From {props.item.price}€ </strong></small><small className="text-secondary">/ night</small></p>
        </div>
      </a>
    </>
  )
}
