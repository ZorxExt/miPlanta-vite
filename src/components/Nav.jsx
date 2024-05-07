import "../styles/Nav.css";
export function Nav() {
  return (
    <header>
      <nav>
        <ul className="nav__ul">
          <li className="nav__li" id="MiPlanta">
            <h1>
              <a href="index.html">
                mi<b>Planta</b>
              </a>
            </h1>
          </li>
          <li className="nav__li" id="Nosotros">
            <a href="about.html">Nosotros</a>
          </li>
          <li className="nav__li" id="Blog">
            <a href="blog.html">Comunidad</a>
          </li>
          <li className="nav__li" id="FAQ">
            <a href="FAQ.html">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
