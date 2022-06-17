import {useState, useEffect} from "react";
import asyncMock from "../utils/asyncMock";
import ItemDetail from "./ItemDetail.js";

function ItemDetailContainer (props) {
	const [item, setItem] = useState([])

	useEffect(() => {
		asyncMock(item, 3000)
		.then(resultado => setItem(resultado))
	}, [item])

	return (
		<ItemDetail  name={"TXT"} image={"/assets/img/prod_txt.png"} description={"CD Tomorrow by Together: The Dream Chapter, Eternity."} precio={"Precio: $5.500"} />
	)
}

export default ItemDetailContainer;