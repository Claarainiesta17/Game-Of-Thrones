import './Cardinfo.css';

export default function Cardinfo({character}){
    return(
        <div>
            <figure key={character.id}>
                <p>{character.name}</p>
                <img src={character.image} alt={character.image}/>
                <p>{character.house}</p>
                    <p>{character.appearances}</p>
                    <p>{character.father}</p>
                    <p>{character.siblings}</p>
                    <p>{character.title}</p>

            </figure>
        </div>
    )


}