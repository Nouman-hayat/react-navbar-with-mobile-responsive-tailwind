import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<section
				className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
			></section>
		</>
	);
};

export default App;
