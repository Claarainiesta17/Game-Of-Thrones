import axios from "axios"
import { useEffect, useState } from "react"
import Card_Casa from "../../Components/Card_casa/Card_casa";
import Footer from "../../Components/Footer/Footer";
import Navigator from "../../NavFooter/Navigator";
import "./Casas.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Icono from "../../Components/Icono/Icono";



export default function Casas(){
   const [casas, setCasas] = useState([])

   useEffect(()=>{
       const getCasas = async()=>{
           const res = await axios.get (`https://api.got.show/api/show/houses/`)

           console.log(res.data)
           setCasas(res.data)
       }
       getCasas()
   },[])

    return(
        <section>
        <Icono/>
        <Navigator/>
        <SimpleBar className="simplebar" style={{ maxHeight: 450 }}>
        <div className="c-gallery">
            {casas.map((casa)=>(
                <Card_Casa casa={casa}/>
            ))}
        </div>
        </SimpleBar>
        <Footer/>
        </section>
    )
}