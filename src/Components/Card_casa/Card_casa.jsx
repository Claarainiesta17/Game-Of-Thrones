import { generatePath, Link } from "react-router-dom"
import './Card_casa.css';

export default function ({casa}){
    return( 
    
            <Link to={generatePath('/casas/:name', { name:casa.name })}>
            
            <div>{casa.data &&
              <figure key={JSON.stringify}>
            <img src={casa.logoURL} alt={casa.id}/>
            <h2>{casa.name}</h2>
            
          </figure>} </div>
          </Link>
           )
        }

   
 