import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Pacotes from "./views/Pacotes"
import Promocoes from "./views/Promocoes"
import Contato from "./views/Contato"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./assets/css/style.css"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Promocoes" element={<Promocoes/>} />
        <Route path="/Contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
