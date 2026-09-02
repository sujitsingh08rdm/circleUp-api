import dotenv from "dotenv";
dotenv.config();

// mongoDB connection
import mongoose from "mongoose";
mongoose.connect(process.env.DB as string);

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import cookieParser from "cookie-parser";

import AuthRouter from "./router/auth.router";
import StorageRouter from "./router/storage.router";
import AuthMiddleware from "./middleware/auth.middleware";
import FriendRouter from "./router/friend.router";

import SwaggerConfig from "./util/swagger";
import { serve, setup } from "swagger-ui-express";
import StatusSocket from "./socket/status.socket";
import corsConfig from "./util/cors";
import ChatSocket from "./socket/chat.socket";
import ChatRouter from "./router/chat.router";

// express/node server
const app = express();
const server = createServer(app);

server.listen(process.env.PORT || 8080, () =>
  console.log("Server is running on PORT", process.env.PORT),
);

// socket connection - ciruit
const io = new Server(server, { cors: corsConfig });
StatusSocket(io);
ChatSocket(io);

// express middleware
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// express routes
app.use("/api-docs", serve, setup(SwaggerConfig));
app.use("/auth", AuthRouter);
app.use("/storage", AuthMiddleware, StorageRouter);
app.use("/friend", AuthMiddleware, FriendRouter);
app.use("/chat", AuthMiddleware, ChatRouter);
