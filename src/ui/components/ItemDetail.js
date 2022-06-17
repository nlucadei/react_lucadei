import {Card, Container, Row, Col} from "react-bootstrap";
import Item from "./Item";
import ItemCount from "./ItemCount";
import productos from "../utils/productos.js";

function ItemDetail ({item}) {
	return (
		<Card bg="light" border="primary" className="estiloCardDetail">
			<Card.Img src={item.image} className="estiloCardImagenDetail"/>
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
				<Card.Text>{item.description}</Card.Text>
				<Card.Text>{item.precio}</Card.Text>
			</Card.Body>
			<Card.Body>
				<Card.Text><ItemCount stock={item.stock} initial={item.initial} /></Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ItemDetail;