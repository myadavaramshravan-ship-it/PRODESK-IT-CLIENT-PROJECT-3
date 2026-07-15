const express = require("express");
const http = require("http");
const cors = require("cors");
const dotenv = require("dotenv");
const { Server } = require("socket.io");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const server = http.createServer(app);


const io = new Server(server,{
    cors:{
        origin:process.env.CLIENT_URL,
        methods:["GET","POST"]
    }
});


// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Real-Time Chat Support API Running"
    });
});


// Socket Connection

io.on("connection", (socket) => {

    console.log("User connected:", socket.id);


    socket.on("send_message", (data) => {

        data.time =
    data.time ||
    new Date().toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
    });

io.emit("receive_message",data);
    });


    socket.on("disconnect", () => {

        console.log(
            "User disconnected:",
            socket.id
        );

    });


});


const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});