import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
const location = useLocation();
return <nav className="navbar">
<div className="navbar-brand">
  {location.pathname === '/Home' && <Link to="/Home" className="navbar-brand-link">Movies</Link>}       
  {location.pathname === '/Favorites' && <Link to="/Favorites" className="navbar-brand-link">Favorite Movies</Link>}   
</div>

<div className="navbar-links">
  <Link to="/Home" className="nav-link">Home</Link>
  <Link to="/Favorites" className="nav-link">Favorites</Link>
</div>
</nav>
}
export default NavBar;