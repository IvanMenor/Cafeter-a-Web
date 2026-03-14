import { useState } from 'react'
import '../App.css'
import HeroMenu from '../components/HeroMenu'
import Footer from '../components/Footer'
import ProductsDelivery from '@/components/ProductsDelivery'

function Delivery() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroMenu />
      <ProductsDelivery />
      <Footer />
    </>
  )
}

export default Delivery
