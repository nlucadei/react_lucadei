import {Card} from "react-bootstrap";

function ItemListContainer (props) {
	return (
		<Card bg="light" border="primary" className="estiloCard">
			<Card.Title>{props.greeting}</Card.Title>
			<Card.Text>{props.dedicatoria}</Card.Text>
		</Card>
		)
}

export default ItemListContainer;