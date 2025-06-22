import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import Logo from "./images/logo.png"; // Adjust the path as necessary
import "./App.css";

function App() {
  return ( 
    <Router>
      <nav className="navbar">
        <h1 className="nav-brand"><img src={Logo} alt="Logo Lucie"></img> Lucie Marché</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "nav-active" : undefined}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li><NavLink to="/projets"
            className={({ isActive }) => isActive ? "nav-active" : undefined}
            end
          >
            Projets
          </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </main>
      <footer>
        © {new Date().getFullYear()} Lucie Marché — Développeuse web
      </footer>
    </Router>
  );
}

export default App;
