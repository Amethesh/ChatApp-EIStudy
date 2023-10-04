const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    //To deal with cors errors
    origin: "http://localhost:5173", //Client url (replace this during deployment)
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`); //Getting ids of connected users

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with id: ${socket.id} joined room: ${data}`);
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id); //Getting ids of users who disconnected
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING!");
});
