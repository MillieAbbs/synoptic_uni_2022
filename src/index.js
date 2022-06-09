// installing dependencies 
const server = require("http").createServer();
const io = require("socket.io")(server, {cors: {origin: "*"}});

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

// listening on port 4000 
server.listen(4000, () => {

	console.log(`The server is now online <3`);

});
