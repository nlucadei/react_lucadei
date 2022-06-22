import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header.js";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer.js";

function App () {
	return (
		<>
		<BrowserRouter>
		<Header/>
		<Routes>
			<Route path="/" element={<ItemListContainer greeting="Gracias por visitar nuestra página" dedicatoria="Esperamos que su experiencia en nuestro e-commerce haya sido satisfactoria. Lo esperamos de vuelta!!"/>}/>
			<Route path="/detail/:id" element={<ItemDetailContainer/>}/>
			<Route path="/category/:categoryId" element={<ItemListContainer/>}/>
		</Routes>
		</BrowserRouter>
		</>
	)
}

export default App;