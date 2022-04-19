import express from "express";
const app = express();
import "express-async-errors";
import cors from "cors";
import { readdirSync } from "fs";
import notFoundMiddleware from "./middleware/not-found";
import errorHandleMiddleware from "./middleware/error-handler";
import connectDB from "./db/connect";
// DEPLOY
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const morgan = require("morgan");
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

require("dotenv").config();

// for socket
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  path: "/socket.io",
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-type"],
  },
});

//middlewares
app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

//DEPLOY && using express static to make them public to access
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/out")));

//autoload routes
readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/out", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

//socket.io
io.on("connect", (socket) => {
  socket.on("new-post", (newPost) => {
    socket.broadcast.emit("new-post", newPost);
  });
});

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.DB);
    http.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
