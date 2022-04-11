import Navigator from '../../NavFooter/Navigator';
import './Card_casa_info.css';

export default function Card_casa_info({casa}){
  

    return(
        <div>
        <Navigator/>
        
            <figure key={JSON.stringify}>
                <img src={casa.logoURL} alt={casa.logoURL}/>
                <p>{casa.name}</p>
                <p>{casa.seat}</p>
                <p>{casa.region}</p>
                <p>{casa.allegiances}</p>
                <p>{casa.religion}</p>
                <p>{casa.createdAt}</p>
            
                

            </figure>
        </div>
    )
    
}
