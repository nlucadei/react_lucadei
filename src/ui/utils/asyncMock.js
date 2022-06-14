const asyncMock = (task, time) => {
	return new Promise ((resolve)=> {
		setTimeout (() => {
			resolve(task);
		},time)
	})
}

export default asyncMock;