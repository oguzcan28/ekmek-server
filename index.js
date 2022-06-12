import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import { handler } from './client/build/handler.js';

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("logSender", log => {
    // console.log(log);
    io.emit("frontend", log);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(handler);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
