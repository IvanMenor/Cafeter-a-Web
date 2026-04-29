import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import './App.css'
import Inicio from './pages/Inicio'
import Menu from './pages/Menu'
import Delivery from "./pages/Delivery"
import Nosotros from "./pages/Nosotros"
import ScrollToTop from "./components/ScrollToTop"
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='/menu' element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
