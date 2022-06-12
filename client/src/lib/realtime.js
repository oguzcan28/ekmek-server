import ioClient from "socket.io-client";

// const url = "http://localhost:5000";

const io = ioClient();

export const socket = io;
