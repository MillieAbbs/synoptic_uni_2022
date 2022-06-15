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
		<div className="background">
			<NavBar />
			<Container maxWidth="sm">
					<Typography className="homeTitle" variant="h2">Cape York 111</Typography>
				<HomeInfo />
			</Container>
		<HomeButtons />
		</div>
	);
};

export default Home;
