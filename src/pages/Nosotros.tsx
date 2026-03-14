import { useState} from "react";
import '../App.css'
import Footer from '../components/Footer'
import ProcesoCafe from "../components/ProcesoCafe";

function Nosotros(){
    const [count, setCount] = useState(0)
    return(
        <>
        <ProcesoCafe />
        <Footer />
        </>
    )
}

export default Nosotros