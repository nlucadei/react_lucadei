import CartWidget from "./CartWidget.js";

function NavBar () {
	return (
		<nav>
			<a href="#" className="paddingLinks">Home</a>
			<a href="#" className="paddingLinks">Productos</a>
			<a href="#" className="paddingLinks">Grupos</a>
			<a href="#" className="paddingLinks">Noticias</a>
			<a href="#" className="paddingLinks">Contacto</a>
			<a href="#" className="paddingLinks"><CartWidget/></a>
		</nav>		
	)
}

export default NavBar;