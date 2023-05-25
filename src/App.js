import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleDog from "./pages/SingleDog"
import Nosotros from "./pages/Nosotros"
import Perrosp from "./pages/Perrosp"
import Perrose from "./pages/Perrose"
import Adopcion from "./pages/Adopcion"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<SingleDog />}></Route>
          <Route path="/sobre-nosotros" element={<Nosotros />}></Route>
          <Route path="/perritos-perdidos" element={<Perrosp/>}></Route>
          <Route path="/perritos-encontrados" element={<Perrose/>}></Route>
          <Route path="/adopcion-de-perritos" element={<Adopcion/>}></Route>
        
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App