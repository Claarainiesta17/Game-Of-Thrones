
import { generatePath, Link } from "react-router-dom"
import "./Card.css"

export default function({character}) {
    return(
        <Link to={generatePath('/characters/:name', {name: character.name})}>
            <div>
                <section key={JSON.stringify}>
                    <img src={character.image} alt={character.id}/>
                   <article>
                   <h1 className="character-name">{character.name}</h1>
                   </article>
                </section>
            </div>
        </Link>
    )
}