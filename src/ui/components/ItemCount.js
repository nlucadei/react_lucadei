import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
	
	const [contador, setContador] = useState(initial)

	const aumentarContador = () => {
		(contador < stock) ? setContador(contador+1) : alert ("No hay stock suficiente.")
	}

	const bajarContador = () => {
		(contador > 0) ? setContador(contador-1) : alert ("Error.")
	}

	const confirmarContador = () => {
		if (contador >=initial && contador <=stock) {
			alert ("Se ha agregado " + contador + " producto(s) al carrito.");
			onAdd(contador);
		} else {
			alert ("Error.")
		 }
	}

	return (
		<div>
			<p>Unidades: {contador}</p>
			<button onClick={aumentarContador} className="botonContador">Aumentar</button>
			<button onClick={bajarContador} className="botonContador">Disminuir</button>
			<button onClick={confirmarContador} className="botonContador">Confirmar</button>
		</div>
	)
}

export default ItemCount;