import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card_casa_info from "../../Components/Card_casa_info/Card_casa_info";

export default function Casasdetails(){
     const urlCasas = ' https://api.got.show/api/show/houses/'
     const [casa, setCasa] = useState ("")
     let {id} = useParams('id')

     useEffect(()=>{
         const getCasas = async () =>{
             const res = await axios.get(`${urlCasas}/${id}`)
             console.log(res.data)
             setCasa(res.data)
         }
         getCasas()
         console.log(Casasdetails)
     }, [])
      return <Card_casa_info casa={casa}/>

}