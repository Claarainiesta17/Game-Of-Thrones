
import { Link } from "react-router-dom";
import "./nav.css"

export default function Navigator(){
    return(
        <div>
        <Link to="/">Home</Link>   
        <Link to="/characters"> Personajes</Link>
        <Link to="/casas"> Casas</Link>
        <Link to="/cronologia"> Cronologia</Link>
        </div>
    )

}