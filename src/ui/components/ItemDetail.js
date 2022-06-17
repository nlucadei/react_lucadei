import {Card, Container, Row, Col} from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail ({id, name, image, description, precio, stock, initial}) {
	return (
		<Card bg="light" border="primary" className="estiloCardDetail">
			<Card.Img src={image} className="estiloCardImagenDetail"/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>{precio}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ItemDetail;