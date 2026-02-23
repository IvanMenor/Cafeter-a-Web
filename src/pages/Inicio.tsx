import { useState } from 'react'
import '../App.css'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Promesa from '../components/Promesa'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

function Inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Carousel />
      <Promesa />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default Inicio
