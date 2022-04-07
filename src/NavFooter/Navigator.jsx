
import { Link } from "react-router-dom";
import "./nav.css"

export default function Navigator(){
    return(
        <div className="nav">
        <ul>
        <li><Link to="/characters"> Personajes</Link></li>
        <li><Link to="/casas"> Casas</Link></li>
        <li><Link to="/cronologia"> Cronologia</Link></li>
        </ul>
        </div>
    )

}