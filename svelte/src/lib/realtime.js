import ioClient from "socket.io-client";

const url = "https://ekmek.herokuapp.com";

const io = ioClient(import.meta.env.DEV ? url : "/");

export const socket = io;
