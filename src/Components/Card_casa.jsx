import { generatePath, Link } from "react-router-dom"
import Card from "./Card"

export default function Card_casa({casa}){
    return( 
    
            <Link to={generatePath("/casas/:name", { name:casa.name })}>
            
            <div className="Galeria">
              <figure key={casa.id}>
            <img src={casa.logoURL} alt={casa.logoURL}/>
            <h2>{casa.name}</h2>
            
          </figure></div>
          </Link>
           )
        }

   
 