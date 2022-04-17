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
   const [casasFiltered, setCasasFiltered] = useState([])
   const [search, setSearch] = useState("")

   const handleSearch = (ev)=>{ 
    setSearch (ev.target.value) 
    console.log(ev.target.value) 
  } 

  const filtrar = ()=>{
      if ( search !=""){
          const filtrados = casas.filter((casa)=> casa.name.toLowerCase().includes(search.toLowerCase()))
         setCasasFiltered(filtrados);
        }
  }


  const getCasas = async () =>{
    const res = await axios.get (`https://api.got.show/api/show/houses/`)

    console.log(res.data)
    setCasas(res.data)
    setCasasFiltered(res.data)

  }
  

   
   useEffect(()=>{
    getCasas()

      
   },[])

   useEffect(()=>{
       filtrar()
   },[search])


    return(
        <section>
        <Icono/>
        <Navigator/>
        <input placeholder= { "Buscar..."} className="input" type="text" onChange={handleSearch}/>
        <SimpleBar className="simplebar" style={{ maxHeight: 450 }}>
        <div className="c-gallery">
            {casasFiltered.map((casa)=>(
                <Card_Casa casa={casa}/>
            ))}
        </div>
        </SimpleBar>
        <Footer/>
        </section>
    )
            }