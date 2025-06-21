import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import APropos from "./pages/APropos";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1 className="nav-brand">Lucie Marché</h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/a-propos" element={<APropos />} />
        </Routes>
      </main>
      <footer>
        © {new Date().getFullYear()} Lucie Marché — Développeuse web
      </footer>
    </Router>
  );
}

export default App;
