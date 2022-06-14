import {Card, Container, Row, Col} from "react-bootstrap";
import ItemCount from "./ItemCount";
import {useState, useEffect} from "react";
import asyncMock from "../utils/asyncMock";
import productos from "../utils/productos.js";
import ItemList from "./ItemList.js"

function ItemListContainer (props) {
	const [items, setItems] = useState([])

	useEffect(() => {
		asyncMock(productos, 3000)
		.then(resultado => setItems(resultado))
	}, [items])

	return (
		<div>
			<div>
				<Card bg="light" border="primary" className="estiloCard">
					<Card.Title>{props.greeting}</Card.Title>
					<Card.Text>{props.dedicatoria}</Card.Text>
				</Card>
			</div>
			<Container>
				<Row>
					<Col><ItemList products= {items}/></Col>
				</Row>
			</Container>
		</div>
		)
}

export default ItemListContainer;