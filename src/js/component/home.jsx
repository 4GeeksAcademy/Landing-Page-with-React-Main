import React from "react";
import Header from "./HomeComponets/header.jsx"
import Body from "./HomeComponets/body.jsx"
import Footer from "./HomeComponets/footer.jsx"


//create your first component
const Home = () => {
	return (
		<div className="text-center" style={{ height: '100vh' }}>
			<Header/>
			<Body/>
			<Footer/>
		</div>
	);
};

export default Home;
