import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import People from "./pages/People";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Values from "./pages/Values";
import SaveToOwn from "./pages/SaveToOwn";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects/:project" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/values" element={<Values />} />
          <Route path="/save_to_own" element={<SaveToOwn />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
