import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Navigator from './NavFooter/Navigator';
import CharactersPage from './Pages/CharacterPage/CharactersPage';
import Charactersdetails from './Pages/CharactersdetailPage/Charactersdetails';
import Casasdetails from './Pages/CasasdetailPage/Casasdetails';
import Cronologia from './Pages/Cronologia/Cronologia';
import Footer from './Components/Footer/Footer';
import Casas from './Pages/CasasPage/Casas';
import Home from './Pages/Home/Home';


function App() {
  return (
    <Router>
      
    <div className="App">

    
    <Navigator/>
 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<Charactersdetails/>}/>
        <Route path="/casas" element={<Casas/>}/>
        <Route path="/casas/:id" element={<Casasdetails/>}/>
        <Route path="/cronologia" element={<Cronologia/>}/>

 
    
     </Routes>
     
  <Footer/>
  </div>
    </Router>
   
  );
}

export default App;
