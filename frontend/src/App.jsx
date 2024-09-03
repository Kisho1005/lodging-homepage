import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Facilities from "./pages/facilities/Facilities";
import Contact from "./pages/contact/Contact";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
