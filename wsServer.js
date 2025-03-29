import http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer((req, res) => {
  res.end("I am connected");
});

const wss = new WebSocketServer({ server });

/* This event is emitted when the header of the response is written
 If the status code is 101, that means the upgrade to websocket was successful
 If the status code is 400, that means the upgrade was not successful
 The headers object contains the headers that are sent to the client
 The req object is the request that triggered this event
*/
wss.on("headers", (headers, req) => {
  //   console.log(headers);
});


/* This event is emitted when a client connects to the websocket server
// The first argument "ws" is the websocket object itself
 The second argument "req" is the original request that triggered this event
*/
wss.on("connection", (ws, req) => {
  console.log("Client connected");
  ws.send("Welcome to the websocket server!!!");
  /* This event is emitted when a message is received from a client
   The message is received as a buffer, which we convert to a string
   */
  ws.on("message", (msg) => {
    console.log(msg?.toString());
  });
});

server.listen(8000);
