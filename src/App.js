import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, About, Teams,
  Partners,
  Services } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about">
            <Route index element={<About />} />
            <Route path="/about/team" element={<Teams />} />
            <Route path="/about/partners" element={<Partners/>} />
            <Route path="/about/services" element={<Services />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
