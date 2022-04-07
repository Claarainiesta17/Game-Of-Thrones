export default function Card_casa_info({casa}){
    return(
        <div>
            <figure key={casa.name}>
                <img src={casa.logoURL} alt={casa.logoURL}/>
                <p>{casa.words}</p>
            </figure>
        </div>
    )
    
}