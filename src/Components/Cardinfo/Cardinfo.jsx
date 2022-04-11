import Navigator from '../../NavFooter/Navigator';
import './Cardinfo.css';
/*import { useTranslation } from 'react-i18next';*/

export default function Cardinfo({character}){
    /*const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };*/

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