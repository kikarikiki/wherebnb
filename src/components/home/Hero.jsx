import React from 'react';

export default function Hero() {

  return (

      <section className="row justify-content-evenly align-items-center my-4">
        <img src="../../../public/images/photo-grid.png" className="img-fluid col-md-6 order-md-2 mb-4" alt="" />
        <div className="hero-text-block col-md-4 order-md-1">
          <h2>Home is where you'll be</h2>
          <p>Whether you seek tranquility in the countryside, the vibrant energy of a bustling metropolis, or the serenity of a beachfront escape, Wherebnb has your dream stay covered.</p>
        </div>
      </section>
  )
}
