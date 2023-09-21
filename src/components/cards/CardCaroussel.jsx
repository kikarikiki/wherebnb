import React from 'react';
import Card from './Card';

export default function CardCaroussel() {

  return (
    <section className="row g-2">
      <Card
        img="../../../src/assets/images/katie-zaferes.png"
        title="Life Lessons with Katie Zaferes"
        rating="5.0"
        reviewcount={6}
        country="USA"
        price={99}
      />
      <Card
        img="../../../src/assets/images/katie-zaferes.png"
        title="Life Lessons with Katie Zaferes"
        rating="5.0"
        reviewcount={6}
        country="USA"
        price={99}
      />
      <Card
        img="../../../src/assets/images/katie-zaferes.png"
        title="Life Lessons with Katie Zaferes"
        rating="5.0"
        reviewcount={6}
        country="USA"
        price={99}
      />
      <Card
        img="../../../src/assets/images/katie-zaferes.png"
        title="Life Lessons with Katie Zaferes"
        rating="5.0"
        reviewcount={6}
        country="USA"
        price={99}
      />
    </section>
  )
}
