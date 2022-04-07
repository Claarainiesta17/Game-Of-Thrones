
import { generatePath, Link } from "react-router-dom"
import "./Card.css"

export default function({character}) {
    return(
        <Link to={generatePath('/characters/:name', {name: character.name})}>
            <div>
                <section key={character.id}>
                    <img src={character.image} alt={character.id}/>
                   <article>
                   <h1>{character.name}</h1>
                   </article>
                </section>
            </div>
        </Link>
    )
}