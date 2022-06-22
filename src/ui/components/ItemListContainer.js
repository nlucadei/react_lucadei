import {Card, Container, Row, Col} from "react-bootstrap";
import ItemCount from "./ItemCount";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import asyncMock from "../utils/asyncMock";
import getProductsByCategoryId from "../utils/asyncMock";
import productos from "../utils/productos.js";
import ItemList from "./ItemList.js"

function ItemListContainer (props) {
	const [items, setItems] = useState([])

	const {categoryId} = useParams()

	useEffect(() => {
		if (!categoryId) {
			asyncMock(productos, 3000)
			.then(resultado => {setItems(resultado)})
		} else {
			getProductsByCategoryId (categoryId)
			.then(resultado => {setItems(resultado)})
		}
	}, [categoryId])

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