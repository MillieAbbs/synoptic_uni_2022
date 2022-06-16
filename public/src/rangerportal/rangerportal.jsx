import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../home/home components/NavBar";
//import { Link } from "react-router-dom";
import "./rangerportal.css";
import LoginForm from "./rangerportal components/LoginForm";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

let chatlist;

// hardcoded login details
const Rangerportal = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  axios.get("http://localhost:5000/getClients").then(function(response) {
    let output = [];

    for (let i = 0; i < response.data.length; i++) {
      output.push("http://localhost:3000/chat/" + response.data[i]);
    }

    chatlist = output;
  });

  const adminUser = {
    username: "rangerguy",
    password: "admin",
  };

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        username: details.username,
      });
    } else {
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ username: "" });
  };

  return (
    <Container maxWidth="md">
      <NavBar />
      <Box
        sx={{
          width: "100%",
          height: "100px",
        }}
      />
      <div>
        {user.username !== "" ? (
          <div className="welcome">
            <Typography variant="h4">Welcome, {user.username}</Typography>
            <Typography variant="h6">Open chats:</Typography>
            <Stack spacing={2}>
              {chatlist.map((link) => {
                return (
                  <Link target="_blank" href={link}>
                    <Button
                      sx={{
                        backgroundColor: "#3a0ca3"
                      }}
                      variant="contained">
                      {link}
                    </Button>
                  </Link>
                );
              })}
              <Button
                sx={{
                  backgroundColor: "#7209B7",
                }}
                variant="contained"
                onClick={Logout}
              >
                Logout
              </Button>
            </Stack>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </Container>
  );
};

export default Rangerportal;
