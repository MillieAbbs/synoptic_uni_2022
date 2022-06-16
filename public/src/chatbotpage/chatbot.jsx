import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../home/home components/NavBar";
import ChatBot from "react-simple-chatbot";
import Container from "@mui/material/Container";
import LocationGetter from "./locationGetter";
import { ThemeProvider } from "styled-components";
import Box from '@mui/material/Box';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';

// chatbot source: https://github.com/LucasBassetti/react-simple-chatbot#readme
const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Roboto",
    headerBgColor: "#4361EE",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#4361EE",
    botFontColor: "#fff",
    userBubbleColor: "#F72585",
    userFontColor: "#fff",
  };

  return (
    <div className="home">
      <Container maxWidth="md">
        <NavBar />
        <Box
      sx={{
        width: '100%',
        height: '100px'
      }}
    />
        <Typography className="homeTitle" variant="h2">Cape York Help Desk</Typography>
        <ThemeProvider theme={theme}>
          <ChatBot
            style={{ width: "auto" }}
            steps={[
              {
                id: "first_q",
                message: "What would you like help with?",
                trigger: "initial_choice",
              },
              {
                id: "initial_choice",
                options: [
                  { value: 1, label: "Amenities", trigger: "choose_amenity" },
                  {
                    value: 2,
                    label: "Things to do",
                    trigger: "choose_amenity",
                  },
                  { value: 3, label: "Information", trigger: "info_q" },
                ],
              },
              {
                id: "info_q",
                message: "What would you like information about?",
                trigger: "info_options",
              },
              {
                id: "choose_amenity",
                message: "What amenity are you looking for?",
                trigger: "amenity_options",
              },
              {
                id: "amenity_options",
                options: [
                  { value: 4, label: "Healthcare", trigger: "health_options" },
                  { value: 5, label: "Food/Drink", trigger: "food_options" },
                ],
              },
              {
                id: "health_options",
                message: "What kind of healthcare do you need?",
                trigger: "choose_healthcare",
              },
              {
                id: "food_options",
                message: "What kind of eatery are you looking for?",
              },
              {
                id: "choose_healthcare",
                options: [
                  { value: 6, label: "Hospital", trigger: "find_hospital" },
                  { value: 7, label: "Pharmacy", trigger: "find_pharmacy" },
                ],
              },
              {
                id: "find_hospital",
                component: <LocationGetter whatToLookFor="hospital" />,
              },
              {
                id: "find_pharmacy",
                component: <LocationGetter whatToLookFor="pharmacy" />,
              },
              {
                id: "info_options",
                options: [
                  { value: 8, label: "wildlife", trigger: "wildlife_info" },
                  { value: 9, label: "culture", trigger: "culture_info" },
                ],
              },
              {
                id: "wildlife_info",
                message: "You can find more wildlife info here: ",
              },
              {
                id: "culture_info",
                message: "You can find more culture info here: ",
              },
            ]}
          />
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default Chatbot;