import React from "react";
import ItemCount from "./ItemCount.js";
import {Card} from "react-bootstrap";

function Item ({id, name, image, description, precio, stock, initial}) {
	return (
		<Card bg="light" border="primary" className="estiloCardProductos">
			<Card.Img src={image} className="estiloCardImagen"/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{precio}</Card.Text>
			</Card.Body>
			<Card.Body>
				<Card.Text><ItemCount stock={stock} initial={initial} /></Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Item;