import productos from "./productos.js";

const asyncMock = (task, time) => {
	return new Promise ((resolve)=> {
		setTimeout (() => {
			resolve(task);
		},time)
	})
}

const getProductsById = (id) => {
	return new Promise ((resolve)=> {
		setTimeout (() => {
			resolve(productos.find(prod => prod.id === id));
		},300)
	})
}

const getProductsByCategoryId = (categoryId) => {
	return new Promise ((resolve)=> {
		setTimeout (() => {
			resolve(productos.filter(prod => prod.categoryId === categoryId));
		},300)
	})
}

export default asyncMock;