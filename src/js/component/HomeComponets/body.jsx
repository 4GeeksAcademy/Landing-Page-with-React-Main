import React from "react";
import Button from 'react-bootstrap/Button'

// flex type
let mainFlex = " d-flex "
// for centering side by side
let centerItemsRow = mainFlex+" justify-content-center align-items-center ";
// for centering top to bottom
let centerItemsColumn = mainFlex+" flex-column align-items-center";
// for the top box
let centerItemsColumnLeft = mainFlex+" flex-column align-items-left";





//create your first component
const Home = () => {
	// empty card
	let emptyWidth = (<div className={centerItemsRow} style={{ height: '100%', width: '3%'}}/>);
	// fill in text
	

	// this is the cards
	let card = (
		<div className = {centerItemsColumn} style={{ height: '100%', width: "22.75%"}}>
			{/* header */}
			<div className = {centerItemsRow} style={{ height: '35%', width: '100%', backgroundColor: 'rgb(204, 204, 204)', color: 'rgb(164, 165, 169)'}}>
				<h1 style={{fontSize: '100%'}}>500 x 325</h1>
			</div>



			{/* body */}
			<div className = {centerItemsColumn} style={{ height: '50%', width: '100%', border: '1px solid rgba(52, 58, 64, 0.199)'}}>
				<h1 style={{fontSize: '100%'}}>Card title</h1>
				<h1 style={{fontSize: '90%'}}>
					Lorem ipsum dolor at amet, consectetur adipisicing eit. Iosa, psam, eligenci, in quo sunt possimus non incidunt odit vero
					aliquid similique quaerat nam nobis ilo asperatur vitae fugiat numquam repelat.
				</h1>
			</div>



			{/* footer */}
			<div className = {centerItemsRow} style={{ height: '15%', width: '100%', border: '1px solid rgba(52, 58, 64, 0.199)'}}>
				<Button className = {centerItemsRow} style={{ height: '75%', width: '80%', fontSize: '100%'}}>
					<h1 style={{fontSize: '100%'}}>Find Out More!</h1>
				</Button>
			</div>
		</div>
	);





	return (
		<div className={centerItemsRow} style={{ height: '85%'}}>
			{/* MainBox */}
			<div className={centerItemsColumn} style={{ height: '100%', width: '60%'}}>
				{/* TopBox */}
				<div className={centerItemsRow} style={{ height: '40%', width: '100%', marginBottom: '1%', backgroundColor: 'rgb(235, 237, 240)'}}>
					<div className={centerItemsColumnLeft} style={{ height: '100%', width: '5%'}}/>
					<div className={centerItemsColumnLeft} style={{ height: '100%', width: '95%'}}>
						{/* the welcom */}
						<h1 style={{fontSize: '300%', textAlign: 'left', marginBottom: '2%', }}>
							A Warm Welcome!
						</h1>

						{/* fill in text */}
						<h1 style={{ fontSize: '110%', textAlign: 'left', fontWeight: 'lighter', marginBottom: '2%',  }}>
							Lorem ipsum dolor at amet, consectetur adipisicing eit. Iosa, psam, eligenci, in quo sunt possimus non incidunt odit vero
							aliquid similique quaerat nam nobis ilo asperatur vitae fugiat numquam repelat.
						</h1>


						{/* button */}
						<Button className = {centerItemsRow} style={{ height: '15%', width: '15%', fontSize: '100%'}}>
							<h1 style={{fontSize: '90%'}}>Call to action!</h1>
						</Button>
					</div>
				</div>





				{/* Bottom Box */}
				<div className={centerItemsRow} style={{ height: '58%', width: '100%', marginBottom: '1%'}}>
					{card}
					{emptyWidth}
					
					{card}
					{emptyWidth}
					
					{card}
					{emptyWidth}

					{card}
				</div>
			</div>
		</div>
	);
};

export default Home;
