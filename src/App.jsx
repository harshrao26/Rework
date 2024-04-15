import React from 'react'
import Nav from './components/Nav'
import Work from './components/Work'
import Strips from './components/Strips'
import Products from './components/Products'
import CardsSection from './components/CardsSection'
import Footer from './components/Footer'
import MovingSrips from './components/MovingStrips'
import './App.css'
function App() {
  return (
    <div className='font-[Poppins] tracking-tighter bg-zinc-900 text-white'>
      <Nav />
      <Work />
      <Strips />
      <Products />
      <CardsSection />
      <Footer />
    </div>
  )
}

export default App