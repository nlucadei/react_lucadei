import CartWidget from "./CartWidget.js";
import {NavLink} from "react-router-dom";

function NavBar () {
	return (
		<div>
			<nav className="estiloNavbar">
				<NavLink to="/" className="paddingLinks">Home</NavLink>
				<NavLink to="/categoryId/vestimenta" className="paddingLinks">Vestimenta</NavLink>
				<NavLink to="/categoryId/discos" className="paddingLinks">Discos</NavLink>
				<NavLink to="/categoryId/miscelaneos" className="paddingLinks">Misceláneos</NavLink>
				<CartWidget/>
			</nav>
		</div>		
	)
}

export default NavBar;