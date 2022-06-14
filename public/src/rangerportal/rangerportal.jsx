import React from "react";
import { useState } from "react";
import NavBar from "../home/home components/NavBar";
//import { Link } from "react-router-dom";
import './rangerportal.css';
import LoginForm from "./rangerportal components/LoginForm";

const Rangerportal = () => {
	const adminUser = {
		username: "rangerguy",
		password: "admin123"
	}

	const [user, setUser] = useState({username:"", password:""});
	const [error, setError] = useState("");

	const Login = details => {
		console.log(details);

		if (details.username === adminUser.username && details.password === adminUser.password){
			console.log("Logged in");
			setUser({
				username: details.username,
			})
		} else{
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
