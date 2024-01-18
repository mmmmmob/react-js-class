// import express to run as a js framework for server
import express from "express";

// call express() with variable
const webServer = express();

// 1) store req/res callback in variable
const homeContent = (req, res) => {
  console.log("This is Root route!");
  res.send("This is Root route!");
};

// 2) store news data array to response back to client
const newsData = [
  { name: "news 1", detail: "detail 1" },
  { name: "news 2", detail: "detail 2" },
  { name: "news 3", detail: "detail 3" },
];

// 3) store users data array to response back to client
const usersData = [
  { userId: "mock-id-1" },
  { name: "mock-id-2" },
  { name: "mock-id-3" },
];

// 4) store indiv user data object to response back to client
const myData = {
  name: "mock-name",
  role: "user",
  picture: "-----",
};

// initialize web server at 127.0.0.1:3001 and log when succeed
webServer.listen(3001, "127.0.0.1", () => {
  console.log("Server has started at 127.0.0.1:3001");
});

// 1) GET with variable
webServer.get("/", homeContent);

// 2-5) GET with req/res callback which use .send() to send data back to client
webServer.get("/news", (req, res) => {
  res.send(newsData);
});

webServer.get("/users", (req, res) => {
  res.send(usersData);
});

webServer.get("/me", (req, res) => {
  res.send(myData);
});

webServer.get("/health-check", (req, res) => {
  res.send("Server is fine!");
});
