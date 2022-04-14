import Navigator from '../../NavFooter/Navigator';
import './Card_casa_info.css';
import { useTranslation } from 'react-i18next';

export default function Card_casa_info({casa}){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    return(
        <div>
        <Navigator/>
        
            <figure key={JSON.stringify}>
                <img src={casa.logoURL} alt={casa.logoURL}/>
                <div className="detalle-casas">
                <h3>{t("name")}</h3>
                <p>{casa.name}</p>
                <h3>{t("seat")}</h3>
                <p>{casa.seat}</p>
                <h3>{t("region")}</h3>
                <p>{casa.region}</p>
                <h3>{t("allegiance")}</h3>
                <p>{casa.allegiance}</p>
                <h3>{t("religion")}</h3>
                <p>{casa.religion}</p>
                <h3>{t("createdAt")}</h3>
                <p>{casa.createdAt}</p>
            
                
</div>
            </figure>
        </div>
    )
}
