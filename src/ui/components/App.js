import Header from "./Header.js";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from "./ItemDetailContainer.js";
import Cart from "./Cart.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App () {
	return (
		<>
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<ItemListContainer
					greeting="Gracias por visitar nuestra página"
					dedicatoria="Esperamos que su experiencia en nuestro e-commerce haya sido satisfactoria. Lo esperamos de vuelta!!"/>} />        	
			</Routes>
		</BrowserRouter>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<ItemDetailContainer/>} />
				<Route path='/cart' element={<Cart/>} />
			</Routes>
		</BrowserRouter>
		</>
	)
}

export default App;