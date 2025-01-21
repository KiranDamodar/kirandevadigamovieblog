import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
const location = useLocation();
return <nav className="navbar">
<div className="navbar-brand">
{location.pathname === '/' && <Link to="/home" className="navbar-brand-link">Movies</Link>}       
{location.pathname === '/favorites' && <Link to="/favorites" className="navbar-brand-link">Favorite Movies</Link>}  
</div>

<div className="navbar-links">
  <Link to="/" className="nav-link">Home</Link>
  <Link to="/favorites" className="nav-link">Favorites</Link>
</div>
</nav>
}
export default NavBar;