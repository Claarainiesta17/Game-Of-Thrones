import axios from "axios"
import { useEffect, useState } from "react"
import Card_Casa from "../../Components/Card_casa";
import "./Casas.css"



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
        
        <div className="Galeria">
            {casas.map((casa)=>(
                <Card_Casa casa={casa}/>
            ))}
        </div>
    )
}