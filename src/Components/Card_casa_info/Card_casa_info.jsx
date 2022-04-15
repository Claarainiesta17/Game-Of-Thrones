import Navigator from '../../NavFooter/Navigator';
import './Card_casa_info.css';
import { useTranslation } from 'react-i18next';

export default function Card_casa_info({casa}){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    return(
        <div key={JSON.stringify}>
        <Navigator/>
            <figure className="b-section-casas">
                <img className="logo-casas" src={casa.logoURL} alt={casa.logoURL}/>
                <h3 className="nombre-casa">{casa.name}</h3>
                </figure>
                <div className="toda-seccion2">
                <figure>
                <h3>{t("seat")}</h3>
                <p>{casa.seat}</p>
                </figure>
                <figure>
                <h3>{t("region")}</h3>
                <p>{casa.region}</p>
                </figure>
                <figure>
                <h3>{t("allegiance")}</h3>
                <p>{casa.allegiance}</p>
                </figure>
                <figure>
                <h3>{t("religion")}</h3>
                <p>{casa.religion}</p>
                </figure>
                <figure>
                <h3>{t("createdAt")}</h3>
                <p>{casa.createdAt}</p>
                </figure>
                </div>
        </div>
    )
}
