import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Navigator from './NavFooter/Navigator';
import Home from './Pages/Home';
import CharactersPage from './Pages/CharacterPage/CharactersPage';
import Charactersdetails from './Pages/CharacterPage/Charactersdetails';
import Casasdetails from './Pages/CasasPage/Casasdetails';
import Cronologia from './Pages/Cronologia';
import Footer from './Components/Footer/Footer';
import Casas from './Pages/CasasPage/Casas';



function App() {
  return (
    <Router>
      
    <div className="App">

    
    <Navigator/>
    <Home/>
    </div>
      <Routes>
        <Route Path="/" element={<Home/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<Charactersdetails/>}/>
        <Route path="/casas" element={<Casas/>}/>
        <Route path="/casas/:id" element={<Casasdetails/>}/>
        <Route path="/cronologia" element={<Cronologia/>}/>

 
    
     </Routes>
    
  <Footer/>
    
    </Router>
    
  );
}

export default App;
