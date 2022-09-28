const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//Seteamos Puerto de NodeJS donde estara escuchando desde Angular
app.set("port",3000);

module.exports = app;