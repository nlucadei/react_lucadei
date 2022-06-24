import {Card} from "react-bootstrap";
import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from "./ItemCount.js";

function ItemDetail ({id, name, image, description, precio, stock, initial}) {
	const [comprarProducto, setComprarProducto] = useState();
  	const onAdd = (cantidadSeleccionada) => {
    	setComprarProducto(cantidadSeleccionada);
  	}

	return (
		<Card bg="light" border="primary" className="estiloCardDetail">
			<Card.Img src={image} className="estiloCardImagenDetail"/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Card.Text>{precio}</Card.Text>
			</Card.Body>
			<Card.Body>
				{comprarProducto ? <Link to={"/cart"}>Finalizar la compra</Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
			</Card.Body>
		</Card>
	)
}

export default ItemDetail;