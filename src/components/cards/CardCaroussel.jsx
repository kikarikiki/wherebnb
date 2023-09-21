import React from 'react';
import Card from './Card';
import data from '../../data';

export default function CardCaroussel(){
  // <Hero />
const cards = data.map(item => {
  return (
    <Card
        key={item.id}
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
    />
  )
})

return (
<section className="container-fluid mt-4">
  <div className="row gap-3">
  {cards}
  </div>
</section>
)
}
