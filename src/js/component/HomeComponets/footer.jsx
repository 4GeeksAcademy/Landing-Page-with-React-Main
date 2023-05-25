import React from "react";
import Styles from "./styles/shared.module.css";


//create your first component
const Home = () => {
	// for centering
	let centeringItems = " d-flex justify-content-center align-items-center ";
	// class for dividers to center items
	let dividerClass = " w-50 " + centeringItems;
	// the soft black
	let softBlack = "rgb(52, 58, 64)";


	return (
		<div className={centeringItems} style={{ height: '10%', backgroundColor: softBlack }}>
			<h1 style={{color: 'white', fontSize: '100%' }}>
				Copywright @ vc blah
			</h1>
		</div>
	);
};

export default Home;
