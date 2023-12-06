import { Link } from "react-router-dom";

function Header({isLogged}) {
  return (
    <nav id="menu-horizontal">
      <Link to="/">
        <h2>Pixel Art</h2>
      </Link>
      <ul>
        {
          isLogged && (
            <>
              <li><Link to="/newProject">NOVO DESENHO</Link></li>
              <li><Link to="/backgrounds">FUNDOS</Link></li>
            </>
          )
        }
        <li><Link to="/informacao">CONHEÇA O PROJETO</Link></li>
        <li><Link to="/usuarios">USUÁRIOS</Link></li>
        {
          !isLogged && <li><Link to="/login">LOGIN</Link></li>
        }
      </ul>
    </nav>
  );
}

export default Header