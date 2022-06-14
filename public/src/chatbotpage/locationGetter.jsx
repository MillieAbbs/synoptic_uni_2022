import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const LocationGetter = (props) =>{
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);

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
  let URLresult =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=" +
  latitude +
  "%2C" +
  longitude +
  "&rankby=distance&type=" +
  props.whatToLookFor +
  "&key=AIzaSyD5znsUPPrtztE1KJcBRftdK444DyJyyDg";
  console.log(URLresult);

  // Make a request
 axios
 .get(URLresult)
 .then(function(response) {
   let name = response.
   console.log(response);
 })
 .catch(function(error) {
   // handle error
   console.log(error);
 })
 .then(function() {
   // always executed
 });

}, [latitude, longitude])

  return (
    <div>
      <h2> Your location is: Longitude: {longitude} Latitude: {latitude} </h2>
      <h1> The nearest {props.whatToLookFor} is results[0].name </h1>
    </div>
  );
  };

export default LocationGetter;
