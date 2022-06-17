// installing dependencies 
const server = require("http").createServer();
const io = require("socket.io")(server, {cors: {origin: "*"}});
const express = require('express')
const axios = require('axios')
const cors = require('cors')

const new_message_event = "newChatMessage";

let online_users = [];

// on connection to app
io.on("connection", (socket) => {

	// finds assigned room number and stores as roomId
	const { roomId } = socket.handshake.query;

	// add room to array of rooms
	online_users.push(roomId);

	// logs that client id has connected to console 
	console.log(`Client: id = "${socket.id}" has connected in room "${roomId}"!`);

	console.log(online_users);

	// joins the assigned room
	socket.join(roomId);

	// socket listens for new messages
	socket.on(new_message_event, (data) => {

		// emits new message to room
		io.in(roomId).emit(new_message_event, data);

	});

	// on app disconnection (user closes the socket)
	socket.on("disconnect", () => {

		// remove room from array of rooms
		online_users.splice(online_users.indexOf(roomId), 1);

		// logs that client id has disconnected to console 
		console.log(`Client: id = "${socket.id}" has diconnected from room "${roomId}".`);

		console.log(online_users);

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
        "";
    console.log(URL)

    axios.get(URL)
        .then(function (response) {
            res.json(response.data)
        })
        .catch(function (error) {
            res.send("fail:" + error)
        })
})

app.get('/getClients', (req, res) => {

	res.send(online_users);

})

// chat bot listening on port 5000
app.listen(5000, () => {
    console.log(`Chat bot listening on port 5000`)
})

// live chat listening on port 4000
server.listen(4000, () => {

	console.log(`Live chat listening on port 4000`);

});