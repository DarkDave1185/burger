const express = require("express");
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3001;

let routes = require('./controllers/burgers_controllers.js')

app.use(express.static('public/'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', routes)

app.listen(PORT, function() {
    console.log("App listening to PORT " + PORT);
});