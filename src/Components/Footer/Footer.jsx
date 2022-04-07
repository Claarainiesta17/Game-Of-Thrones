import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer">
         <ul>
        <li><Link to="/characters"> Personajes</Link></li>
        <li><Link to="/casas"> Casas</Link></li>
        <li><Link to="/cronologia"> Cronologia</Link></li>
        </ul>
        </div>
    )

}