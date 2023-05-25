import React from "react";
import Button from 'react-bootstrap/Button'
import Styles from "./styles/shared.module.css";

// this is to create the button
function createButton(textInsideButton, forceWhiteText) {
	return (
		<Button className={Styles.transparentButton} style={forceWhiteText && { color: 'white' } || null}>
			<h1>{textInsideButton}</h1>
		</Button>
	);
}


//create your first component
const Home = () => {
	// class for dividers to center items
	let dividerClass = "w-50 d-flex justify-content-center align-items-center";
	// the soft black
	let softBlack = "rgb(52, 58, 64)";


    return (
        <div className="d-flex justify-content-center" style={{ height: '5%' }}>
			{/* start boot strap */}
            <div className={dividerClass} style={{background: softBlack}}>
				{/* start boot strap button Start Bootstrap */}
				{createButton("Start Bootstrap", true)}
            </div>


			{/* other buttons */}
            <div className={dividerClass} style={{background: softBlack}}>
                {/* home button */}
				{createButton("Home", true)}

				{/* about button */}
				{createButton("About", false)}

				{/* services button */}
				{createButton("Services", false)}

				{/* contact button */}
				{createButton("Contact", false)}
            </div>
        </div>
    );
};

export default Home;
