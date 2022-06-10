import {Card} from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemListContainer (props) {
	return (
		<div>
			<div>
				<Card bg="light" border="primary" className="estiloCard">
					<Card.Title>{props.greeting}</Card.Title>
					<Card.Text>{props.dedicatoria}</Card.Text>
				</Card>
			</div>
			<div>
				<ItemCount stock={5} onAdd={()=>{}} initial={1} />
			</div>
		</div>
		)
}

export default ItemListContainer;