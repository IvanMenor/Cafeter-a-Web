import '../App.css'
import Footer from '../components/Footer'
import ProcesoCafe from "../components/ProcesoCafe";
import HeroNosotros from '../components/HeroNosotros';
import IntroProceso from '../components/IntroProceso';

function Nosotros() {
    return (
        <>
            <HeroNosotros />
            <IntroProceso />
            <ProcesoCafe />
            <Footer />
        </>
    )
}

export default Nosotros