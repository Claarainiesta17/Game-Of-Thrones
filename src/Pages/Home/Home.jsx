import "./Home.css";
import Footer from '../../Components/Footer/Footer';
import Navigator from "../../NavFooter/Navigator";

export default function Home(){
    return(
        <div className="home">
        <Navigator/>
        <h1 className="titulo">GAMES OF <br/>THRONES</h1>
        <Footer/>
        </div>
    )
}