import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Tela from "./Tela1";
import Tela2 from "./Tela2";
import Trajetoria from "./Trajetoria";
import Curriculo from "./Curriculo";
import Driven from "./Driven";
import Habilidades from "./Habilidades";
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tela />} />
      <Route path="/tela2" element={<Tela2 />} />
      <Route path="/Trajetoria" element={<Trajetoria />} />
      <Route path="/Curriculo" element={<Curriculo />} />
      <Route path="/Driven" element={<Driven />} />
      <Route path="/Habilidades" element={<Habilidades/>} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
