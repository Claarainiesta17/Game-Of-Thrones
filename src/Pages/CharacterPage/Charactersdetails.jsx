import axios from "axios";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import Cardinfo from "../../Components/Cardinfo";

export default function Charactersdetails(){

    const urlGot = 'https://api.got.show/api/show/characters/'
    const [character, setCharacter] = useState("")
    let {id} = useParams('id')

    useEffect(()=>{
        const getCharacters = async () =>{
            const res = await axios.get(`${urlGot}/${id}`)
            console.log(res.data)
            setCharacter(res.data)
        }
        getCharacters()
        console.log(Charactersdetails)
    }, [])

    return<Cardinfo character={character}/>
}
