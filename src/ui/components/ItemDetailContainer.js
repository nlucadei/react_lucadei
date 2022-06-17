import {useState, useEffect} from "react";
import asyncMock from "../utils/asyncMock";
import ItemDetail from "./ItemDetail.js";
import productos from "../utils/productos.js";

function ItemDetailContainer () {
	const [item, setItem] = useState([])

	useEffect(() => {
		asyncMock(productos, 3000)
		.then(resultado => setItem(resultado))
	}, [item])

	return (
		<ItemDetail item={item}/>
	)
}

export default ItemDetailContainer;