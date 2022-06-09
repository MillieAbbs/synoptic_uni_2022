import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

	// give each user a unique room id
	const roomName = Math.ceil(Math.random() * 999999);

	return (
		<div>
			<h1>G'day Mate</h1>
			<Link to={`/chat/${roomName}`}>Connect me!</Link>
		</div>
	);
};

export default Home;
