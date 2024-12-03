import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Facilities from "./pages/facilities/Facilities";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import "./App.css";


function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/Home" element={<Home />} />
    //     <Route path="/facilities" element={<Facilities />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  );
}

export default App;
