import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import "./character.css"

export default function CharactersPage(){
    const [characters, setCharacters]= useState([])

    useEffect(()=>{
        const getCharacters = async ()=>{
            const res = await axios.get("https://api.got.show/api/show/characters/")

            console.log(res.data)
            setCharacters(res.data)
 

        }
        getCharacters()
    },[])

    
  return (
     
    <div className="c-gallery">
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  )

}