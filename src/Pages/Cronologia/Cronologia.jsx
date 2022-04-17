import { useEffect, useState } from "react";
import Navigator from "../../NavFooter/Navigator";
import axios from "axios";
import Card from "../../Components/Card/Card"; 


export default function Cronologia(){
 
  
   const [characters, setCharacters] = useState([]);
   const [showCronology, setShowCronology] = useState(false);
   
     const getCharacters = async ()=>{ 
        const res = await axios.get(`https://api.got.show/api/show/characters/`) 
   
        console.log(res.data) ;
        setCharacters(res.data); 
        filterCharacter(res.data);
       
     };
     const filterCharacter = (charact) =>{
       setShowCronology(!showCronology);
       const characterFilt = charact
       .filter((character)=> character.age && character.age.age)
       .sort((prev, next) =>{
         return showCronology
         ? next.age.age - prev.age.age 
         : prev.age.age - next.age.age
       })
       setCharacters(characterFilt)
     };
     useEffect(()=>{
       getCharacters()
     }, []);
     console.log(characters);

     const parCharacter = [];
     const inparCharacter = [];

     for (let i = 0; i < characters.length; i++){
       if (i % 2 === 0){
         parCharacter.push(characters[i]);
       }else {
         inparCharacter.push(characters[i]);
       }
     }
     
      
      return(<section>
       
        <div>
            <Navigator/>
        </div>
      <div className="contenedorCronology">
        <div className="box-izq">
          <button
          id="asc"
          className="b-cronology"onClick={()=>filterCharacter(characters)}
          >
            {parCharacter[0] && parCharacter[0].age.age}
          </button>
          <img src="https://w7.pngwing.com/pngs/243/26/png-transparent-drawing-long-arrow-angle-arrow-arrowhead.png"width="20px" alt="" className={showCronology ? "flecha" : "flecha_reves"}/>
          {parCharacter.map((character)=>(
            <div className="box-izq-small" key={character.name}>
              {character.age && (
                <p className="box-izq-small_age">{character.age.age}</p>
              )}
    
                <p>{character.name}</p>
                <img className="box-izq.small_age" src={character.image} alt="img"/> </div>
          ))}

        </div>

      </div>
        
      </section>
    )
        }
      