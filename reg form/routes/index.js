const express = require('express');
const route = express.Router();
const userRoutes = require("./user.route");

route.use("/user", userRoutes);

module.exports = route;