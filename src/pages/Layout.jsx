import { Link, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import "../styles/Nav.css";
import "../styles/Footer.css";
export function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav__ul">
            <li className="nav__li" id="MiPlanta">
              <h1>
                <Link to={"/"}>
                  mi<b>Planta</b>
                </Link>
              </h1>
            </li>
            <li className="nav__li" id="Nosotros">
              <Link to={"/nosotros"}>Nosotros</Link>
            </li>
            <li className="nav__li" id="Blog">
              <Link to={"/comunidad"}>Comunidad</Link>
            </li>
            <li className="nav__li" id="FAQ">
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
