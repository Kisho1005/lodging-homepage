import { BrowserRouter, Route, Routes } from "react-router-dom";
import Facilities from "./pages/facilities/Facilities";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
