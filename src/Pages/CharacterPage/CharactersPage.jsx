import { useEffect, useState } from "react"; 
import axios from "axios"; 
import Card from "../../Components/Card/Card"; 
import "./character.css" 
import Navigator from "../../NavFooter/Navigator";
import Footer from "../../Components/Footer/Footer";
import Cronologia from "../Cronologia/Cronologia";

export default function CharactersPage(){ 
    const [characters, setCharacters]= useState([]) 
    const [charfiltered, setCharFiltered] = useState([]) 
    const [search, setSearch] = useState("") 
 
    const handleSearch = (ev)=>{ 
      setSearch (ev.target.value) 
      console.log(ev.target.value) 
    } 
 
  const filtrar = ()=>{ 
    if ( search !=""){ 
      const filtrados = characters.filter((character)=> character.name.toLowerCase().includes(search.toLowerCase())) 
    setCharFiltered(filtrados);
 
    } 
     
     
     
  } 
 
    const getCharacters = async ()=>{ 
      const res = await axios.get(`https://api.got.show/api/show/characters/`) 
 
      console.log(res.data) 
      setCharacters(res.data) 
      setCharFiltered(res.data) 
 
 
  } 
    useEffect(()=>{ 
        
        getCharacters() 
    },[]) 
 
    useEffect(()=>{ 
        
      filtrar() 
  },[search]) 
 
     
  return ( 
     <section>
     <div className="b-navbuscador">
       <div className="b-Buscador">
       <Navigator/>
       <input placeholder={"🔍 Buscar..."}className="input" type="text" onChange={handleSearch}/>  
     </div>
     </div>
    <div className="c-gallery"> 
      
      {charfiltered.map((character) => ( 
        <Card character={character} /> 
      ))} 
    </div>
    <Footer/>
    </section> 
     
  ) 
 
}