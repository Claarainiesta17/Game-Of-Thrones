


export default function Card_casa_info({casa}){
  

    return(
        <div>
          
            <figure key={JSON.stringify}>
                <img src={casa.logoURL} alt={casa.logoURL}/>
                <p>{casa.name}</p>
                <p>{casa.words}</p>
                <p>{casa.seat}</p>
                <p>{casa.region}</p>
                <p>{casa.allegiances}</p>
                <p>{casa.religion}</p>
                <p>{casa.createdAt}</p>

            </figure>
        </div>
    )
    
}


//hacer una peticion con axios y hacer el if con {}&&