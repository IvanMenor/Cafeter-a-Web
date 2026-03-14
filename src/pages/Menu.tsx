import { useState } from 'react'
import '../App.css'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import Filter from '../components/Filter'

function Menu() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Titulo />
            <Filter />
            <Footer />
        </>
    )
}

export default Menu
