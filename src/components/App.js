import Header from "./Header.js";
import ItemListContainer from "./ItemListContainer.js";

function App () {
	return (
		<>
		<Header/>
		<ItemListContainer
			greeting="Gracias por visitar nuestra página"
			dedicatoria="Esperamos que su experiencia en nuestro e-commerce haya sido satisfactoria. Lo esperamos de vuelta!!"
		/>
		</>
	)
}

export default App;