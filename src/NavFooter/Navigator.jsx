import "./nav.css";
import { useTranslation } from "react-i18next";
export default function Navigator(){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    return(
        <div className="nav">
        <div className="banderas">
        <form className="recuadro-blanco" action="http://localhost:3000/">
        <input className="icono-home2" src="https://cdn-icons-png.flaticon.com/512/3388/3388866.png" type="image" value="HOME" alt="homeee"/></form>
        <button><img class="logo1" src="https://cdn-icons-png.flaticon.com/512/330/330557.png" alt="logo-españa" onClick={() => i18n.changeLanguage("es")}/></button>
        <button><img class="logo2" src="https://cdn-icons-png.flaticon.com/512/555/555417.png" alt="logo-inglaterra" onClick={() => i18n.changeLanguage("en")}/></button>
        </div>
        </div>
    )
}