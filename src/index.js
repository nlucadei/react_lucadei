import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./components/NavBar.js";
import "./estilo.css";

function App () {
	return (
		<NavBar/>
		);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

