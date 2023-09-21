import React from 'react';
import Card from './Card';
import data from '../../data';

export default function CardCaroussel(){
  // <Hero />
const cards = data.map(item => {
  return (
    <Card
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
  )
})

return (
<section className="row g-2">
  {cards}
</section>
)
}
