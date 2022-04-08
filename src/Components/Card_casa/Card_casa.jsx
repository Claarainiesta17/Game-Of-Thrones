import { generatePath, Link } from "react-router-dom"
import './Card_casa.css';

export default function ({casa}){
    return( 
    
            <Link to={generatePath('/casas/:name', { name:casa.name })}>
            
<<<<<<< HEAD:src/Components/Card_casa.jsx
            <div>{casa.data &&
              <figure key={JSON.stringify}>
            <img src={casa.logoURL} alt={casa.id}/>
=======
            <div>
              <figure key={casa.id}>
            <img class="imagen-casa" src={casa.logoURL} alt={casa.id}/>
>>>>>>> fce105b22fc64d9696905d671e3b5fae930b89fd:src/Components/Card_casa/Card_casa.jsx
            <h2>{casa.name}</h2>
            
          </figure>} </div>
          </Link>
           )
        }

   
 