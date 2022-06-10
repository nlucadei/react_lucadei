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
			alert ("Se ha agregado " + contador + " producto(s) al carrito.")
		} else {
			alert ("Error.")
		}
	}

	return (
		<div>
			<p>El contador va: {contador}</p>
			<button onClick={aumentarContador} >Aumentar</button>
			<button onClick={bajarContador} >Disminuir</button>
			<button onClick={confirmarContador} >Confirmar</button>
		</div>
	)
}

export default ItemCount