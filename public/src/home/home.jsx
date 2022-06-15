import React from "react";
import "./home.css";
import NavBar from "./home components/NavBar";
import HomeInfo from './home components/HomeInfo';
import HomeButtons from "./home components/HomeButtons";

import { Container } from "@mui/material";

import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';


const Home = () => {

	return (
		<div>
		<NavBar />
		<div className="page">
			<Container maxWidth="sm">
				<Typography className="homeTitle" variant="h2">Cape York Help Desk</Typography>
				<HomeInfo />
			</Container>
		<HomeButtons />
		</div>
		</div>
	);
};

export default Home;
