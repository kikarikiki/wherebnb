import React from 'react';
import Card from './Card';
import data from '../../data';
import './cards.scss';

export default function CardCaroussel(){
  // <Hero />
  const cards = data.map(item => {
    return (
      <Card
          key={item.id}
          item={item}
      />
    )
  })

  return (
    <section className="container-fluid p-0">
      <div className="wrapper-cards gap-3 mt-3">
          {cards}
      </div>
    </section>
  )
}
