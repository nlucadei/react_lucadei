import React from "react";
import Item from "./Item";

function ItemList({products}) {
	return (
			products.map (p =>
				<Item
				id={p.id}
				name={p.name}
				image={p.image}
				description={p.description}
				precio={p.precio}
				initial={p.initial}
				stock={p.stock}
				key={p.id}
				/>
			)
	)
}

export default ItemList;