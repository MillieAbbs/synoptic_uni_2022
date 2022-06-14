import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const LocationGetter = (props) => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [gmapsResponse, setGmapsResponse] = useState({
    results: [
      {
        name: "",
      },
    ],
  });

  if ("geolocation" in navigator) {
    console.log("Available");
  } else {
    console.log("Not Available");
  }
  // if no location known, get user's location
  if (latitude === 0 || longitude === 0) {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      // console.log("Latitude is :", position.coords.latitude);
      setLongitude(position.coords.longitude);
      // console.log("Longitude is :", position.coords.longitude);
    });
  }
  //variables for building api request url
  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      let URLresult =
      "http://localhost:5000/place/lat/" +
      latitude +
      "/long/" +
      longitude +
      "/keyword/" +
      props.whatToLookFor;
    console.log(URLresult);


    // Make a request
    axios
      .get(URLresult, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(function(response) {
        setGmapsResponse(response.data);
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    }
    
  }, [latitude, longitude]);

  return (
    <div>
      <h2>
        {" "}
        Your location is: Longitude: {longitude} Latitude: {latitude}{" "}
      </h2>
      <h1>
        {" "}
        The nearest {props.whatToLookFor} is{" "}
        {gmapsResponse["results"][0]["name"]}{" "}
      </h1>
    </div>
  );
};

export default LocationGetter;
