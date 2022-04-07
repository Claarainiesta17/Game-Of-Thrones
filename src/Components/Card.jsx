
import { generatePath, Link } from "react-router-dom"
import "./Card.css"

export default function({character}) {
    return(
        <Link to={generatePath('/characters/:name', {name: character.name})}>
            <div className="Galeria">
                <figure key={character.id}>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.image}/>
                   
                </figure>
            </div>
        </Link>
    )
}