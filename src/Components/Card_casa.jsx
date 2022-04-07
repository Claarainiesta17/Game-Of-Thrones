import { generatePath, Link } from "react-router-dom"


export default function ({casa}){
    return( 
    
            <Link to={generatePath('/casas/:name', { name:casa.name })}>
            
            <div>
              <figure key={casa.id}>
            <img src={casa.logoURL} alt={casa.id}/>
            <h2>{casa.name}</h2>
            
          </figure></div>
          </Link>
           )
        }

   
 