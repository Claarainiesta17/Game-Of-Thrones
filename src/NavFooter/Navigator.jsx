import "./nav.css";
/*import { useTranslation } from "react-i18next";*/
export default function Navigator(){
    /*const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };
*/
    return(
        <div className="nav">
        <div className="banderas">
        <img class="logo1" src="https://cdn-icons-png.flaticon.com/512/330/330557.png" alt="logo-españa"/>
        <img class="logo2" src="https://cdn-icons-png.flaticon.com/512/555/555417.png" alt="logo-inglaterra"/>
        <button onClick={() => i18n.changeLanguage("es")}>ES{t("ES")}</button>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
        </div>
    )

}