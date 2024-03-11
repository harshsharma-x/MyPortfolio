import Navbar from './components/navbar';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
function App() {
  return (
    <>
    <Navbar />
    
  <Routes>
    <Route path="/" element={<Home/>}>
    </Route>

    <Route path="/Projects" element={<Projects/>}></Route>
  </Routes>
    </>
    
  );
}

export default App;
