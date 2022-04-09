import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Search from './Components/Search/Search';
import CharactersPage from './Pages/CharacterPage/CharactersPage';
import Charactersdetails from './Pages/CharactersdetailPage/Charactersdetails';
import Casas from './Pages/CasasPage/Casas';
import Casasdetails from './Pages/CasasdetailPage/Casasdetails';
import Cronologia from './Pages/Cronologia/Cronologia';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<Charactersdetails/>}/>
        <Route path="/casas" element={<Casas/>}/>
        <Route path="/casas/:id" element={<Casasdetails/>}/>
        <Route path="/cronologia" element={<Cronologia/>}/>
    </Routes>

    </Router>
    </div>
  );
}

export default App;
