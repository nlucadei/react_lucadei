import Header from "./Header.js";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer.js";

function App () {
	return (
		<>
		<Header/>
		<ItemListContainer
			greeting="Gracias por visitar nuestra página"
			dedicatoria="Esperamos que su experiencia en nuestro e-commerce haya sido satisfactoria. Lo esperamos de vuelta!!"
		/>
		<ItemDetailContainer/>
		</>
	)
}

export default App;