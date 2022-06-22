import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import getProductsById from "../utils/asyncMock";
import ItemDetail from "./ItemDetail.js";

function ItemDetailContainer (props) {
	const [item, setItem] = useState([])

	const {id} = useParams()

	useEffect(() => {
		getProductsById(parseInt(id))
		.then(resultado => {setItem(resultado)})
	}, [])

	return (
		<ItemDetail  {...item}/>
	)
}

export default ItemDetailContainer;