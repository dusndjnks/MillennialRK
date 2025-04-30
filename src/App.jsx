import { Routes , Route } from "react-router-dom"
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {

  return (
    <Routes className="App">
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App
