const express = require("express");
const {userController} =require("../controller");
const routes = express.Router();

routes.post("/add" , userController.createUser)

module.exports = routes;
