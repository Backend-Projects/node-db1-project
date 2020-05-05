const express = require("express");
const db = require("../data/dbConfig.js");
const accountsRouter = require('../routers/accountsRouter.js');

const server = express();

server.use(express.json());

server.use("/accounts", accountsRouter);

module.exports = server;
