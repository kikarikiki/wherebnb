import React from 'react';
import Hero from "./Hero";
import Card from "../cards/Card";
import './home.scss'
import CardCaroussel from '../cards/CardCaroussel';

export default function Home() {


  return (
    <div className='container-fluid'>
      <Hero />
      <CardCaroussel />
    </div>
  )
}
