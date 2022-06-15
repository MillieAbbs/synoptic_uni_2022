// installing dependencies 
const server = require("http").createServer();
const io = require("socket.io")(server, {cors: {origin: "*"}});
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const new_message_event = "newChatMessage";

// on connection to app
io.on("connection", (socket) => {

	// logs that client id has connected to console 
	console.log(`Client: id = "${socket.id}" has connected!`);

	// finds assigned room number and stores as roomId
	const { roomId } = socket.handshake.query;

	// joins the assigned room
	socket.join(roomId);

	// socket listens for new messages
	socket.on(new_message_event, (data) => {

		// emits new message to room
		io.in(roomId).emit(new_message_event, data);

	});

	// on app disconnection (user closes the socket)
	socket.on("disconnect", () => {

		// logs that client id has disconnected to console 
		console.log(`Client: id = "${socket.id}" has diconnected.`);

		// leaves room based on assigned room id
		socket.leave(roomId);

	});

});


const app = express()

app.use(cors())
app.use(express.json())

app.get('/place/lat/:lat/long/:long/keyword/:keyword', (req, res) => {

    let URL =
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=" +
        req.params.lat +
        "%2C" +
        req.params.long +
        "&rankby=distance&type=" +
        req.params.keyword +
        "&key=AIzaSyD5znsUPPrtztE1KJcBRftdK444DyJyyDg";
    console.log(URL)

    axios.get(URL)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.send("fail:" + error)
        })
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// chat bot listening on port 5000
app.listen(5000, () => {
    console.log(`Chat bot listening on port 5000`)
})

// chat bot listening on port 4000
server.listen(4000, () => {

	console.log(`Live chat listening on port 4000`);

});