const http = require("http");
const jsonServer = require("json-server");
const express = require("express");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "/src/frontdb.json"));
const middlewares = jsonServer.defaults;
const app = express();
const cors = require("cors");
const port = 8000;

//socket
// const port = 8000 || process.env;
// const socketIo = require("socket.io");
// const serverSocket = http.createServer(app);
// const index = require("./routes/index");
// const io = socketIo(serverSocket);
// const axios = require("axios");
// const ZuKeeperAPI = `http://ec2-15-165-36-165.ap-northeast-2.compute.amazonaws.com:8000/`;

// app.use(index);

// const getApiAndEmit = (socket) => {
//   axios({
//     method: "post",
//     url: `${ZuKeeperAPI}trendslide/`,
//   }).then((res) => {
//     const result = res.data.data;
//     socket.emit("update", result);
//   });
// };

// server-side
// const io = socketIo(serverSocket, {
//   cors: {
//     origin: "zukeeper.ai",
//     methods: ["GET", "POST"],
//     allowedHeaders: ["my-custom-header"],
//     credentials: true,
//   },
// });

// app.use(cors());

// let interval;
// io.on("connection", (socket) => {
//   console.log("connection is made");
//   if (interval) {
//     clearInterval(interval);
//   }
//   // data 10초마다 update
//   interval = setInterval(() => getApiAndEmit(socket), 10000);

//   socket.on("disconnect", () => {
//     console.log("disconnected");
//     clearInterval(interval);
//   });
// });

// serverSocket.listen(port, () => console.log(`listening at ${port}`));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidata",
    Pragma: "no-cache",
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
