import { io, Socket } from "socket.io-client";
import { Player } from "../types/Player";

var socket: Socket;
socket = io("ws://localhost:3000");
type Callback = (...args: any[]) => void;
export function getName() {
  return localStorage.getItem("name");
}
export function setName(name: string) {
  return localStorage.setItem("name", name);
}

export function addHints(hints: string[]) {
  socket.emit("addHints", hints);
}

export function register(type: Player) {
  socket.emit("register", type);
}

export const listenToHints = (callback: Callback) => {
  socket.on("hintsAdded", callback);
};

export function listenToNewFinder(callback: Callback) {
  socket.on("finderConnected", callback);
}

export function listetToNewHelper(callback: Callback) {
  socket.on("helperConnected", callback);
}

export function listenToKeywordGeneration(callback: Callback) {
  socket.on("keywordGenerated", callback);
}

export function listenToHintsGeneration(callback: Callback) {
  socket.on("hintsGenerated", callback);
}
