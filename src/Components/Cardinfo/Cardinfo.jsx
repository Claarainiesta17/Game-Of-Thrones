import Navigator from '../../NavFooter/Navigator';
import './Cardinfo.css';

export default function Cardinfo({character}){
    return(
        <div>
        <Navigator/>
            <figure key={character.id}>
                <img src={character.image} alt={character.image}/>
                <p>{character.name}</p>
                <p>{character.house}</p>
                <p>{character.allegiances}</p>
                    <p>{character.appearances}</p>
                    <p>{character.father}</p>
                    <p>{character.siblings}</p>
                    <p>{character.titles}</p>

            </figure>
        </div>
    )


}