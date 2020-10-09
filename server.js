// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require("./controllers/burgers_controller.js");

// Variables
const app = express();
const PORT = process.env.PORT || 8080;

// Express Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars engine setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use(routes);

// Server start
app.listen(PORT, function(){
    console.log("Server is listening on: PORT " + PORT);
});