/*import { useEffect, useState } from "react";
import Navigator from "../../NavFooter/Navigator";
import axios from "axios";
import Card from "../../Components/Card/Card"; 


export default function Cronologia(){
    const {characters, setCharacters} = useState([])
    const [sort, setSort] = useState("")
    
        setSort (ev.target.value)
        console.log(ev.target.value)
    }
   
    const ordenar = ()=>{
        if (characters.age < characters.age){
            return -1;
        }
    }    
    if (characters.age > characters.age){
        return 1;
    }
   
   
    const getCharacters = async ()=>{ 
        const res = await axios.get(`https://api.got.show/api/show/characters/`) 
   
        console.log(res.data) 
        setCharacters(res.data) 
        setSort(res.data) 
   
   
    } 
          useEffect(()=>{
              getCharacters()
          }, [])
     
      useEffect(()=>{
          ordenar()
      },[sort])



      return(<section>
        <div>
            <Navigator/>
        </div>
        <div className="c-gallery"> 
      
        {sort.map((character) => ( 
          <Card character={character} /> 
        ))} 
      </div></section>
    )
}
*/