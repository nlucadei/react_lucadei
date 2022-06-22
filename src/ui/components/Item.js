import React from "react";
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount.js";
import {Card} from "react-bootstrap";

function Item ({id, name, image, description, precio, stock, initial}) {
	return (
		<Card bg="light" border="primary" className="estiloCardProductos">
			<Card.Img src={image} className="estiloCardImagen"/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{precio}</Card.Text>
				<Link to={`/detail/${id}`}>Ver Detalle</Link>
			</Card.Body>
		</Card>
	)
}

export default Item;