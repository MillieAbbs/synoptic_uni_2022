import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../home/home components/NavBar";
//import { Link } from "react-router-dom";
import './rangerportal.css';
import LoginForm from "./rangerportal components/LoginForm";
import axios from "axios";

let chatlist;

// hardcoded login details
const Rangerportal = () => {

	const [user, setUser] = useState({username:"", password:""});
	const [error, setError] = useState("");

	axios.get('http://localhost:5000/getClients').then(function (response) {

		let output = ""

		for (let i = 0; i < response.data.length; i++){

			output += "http://localhost:3000/chat/" + response.data[i];

		}

		chatlist = output;
	
	})

	const adminUser = {
		username: "rangerguy",
		password: "admin"
	}

	const Login = details => {
		console.log(details);

		if (details.username === adminUser.username && details.password === adminUser.password){
			console.log("Logged in");
			setUser({
				username: details.username,
			})
		

		} else {

			setError("Details do not match!");
		}
	}

	const Logout = () => {

		setUser({username:""})

	}

	return (
		<div className="page">
			<NavBar />
			<div>
				{(user.username !== "") ? (
					<div className="welcome">
						<h2>Welcome, <span>{user.username}</span></h2>
						{chatlist}
						<button onClick={Logout}>Logout</button>
					</div>
				) : (
					<LoginForm Login={Login} error={error}/>
				)
			}
			</div>
		</div>
	);
};

export default Rangerportal;
