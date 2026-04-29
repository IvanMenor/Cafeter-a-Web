import '../App.css'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Promesa from '../components/Promesa'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'

function Inicio() {
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
