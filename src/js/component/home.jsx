import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Card from "./card";
import Cards from "./card";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 text-start">
			<Navbar />
			<div className="row justify-content-center">
				<Jumbotron />
				<div className="container p-0 col-8">
					<div className="row row-cols-4 g-2">
						<Cards />
					</div>
				</div>
			</div>

		</div>
	);
};

export default Home;
