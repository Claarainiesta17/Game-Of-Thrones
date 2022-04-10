import { Link } from "react-router-dom";
import "./Footer.css"
/*import { useTranslation } from "react-i18next";*/

export default function Footer(){
    /*onst { t, i18n } = useTranslation("translation");
    
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };
*/
    return(
        <div className="footer">
        <ul>
        <li><Link to="/characters">Personajes</Link></li>
        <li><Link to="/casas">Casas</Link></li>
        <li><Link to="/cronologia">Cronologia</Link></li>
        </ul>
        </div>
    )

}