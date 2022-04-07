import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import "./character.css"
import Search from "../../Components/Search/Search";

export default function CharactersPage(){
    const [characters, setCharacters]= useState([])

    const getCharacters = async (characterName = "")=>{
      const res = await axios.get(`https://api.got.show/api/show/characters/${characterName}`)

      console.log(res.data)
      setCharacters(res.data)


  }
    useEffect(()=>{
       
        getCharacters()
    },[])

    
  return (
     <section>
       <div className="b-Buscador">
        <Search onSubmit={ (data) =>getCharacters ("character/:name=" + data.name)}/>
     </div>
    <div className="c-gallery">
     
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div></section>
    
  )

}