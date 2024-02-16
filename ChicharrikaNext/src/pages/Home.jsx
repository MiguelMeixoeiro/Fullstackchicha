import React from 'react'
import '../styles/Home.css'
import AnimatedCard from './AnimatedCard';

function Home() {
  return (
  <main className="home-container" > 
  <div className='main-cta'>
    <AnimatedCard />
  </div>
</main>
);
}

export default Home