var express = require('express');
var method_Override = require('method-override');
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 3000;

var app = express();

//Statis server content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set Handlebars
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//Import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
   console.log("App listening on PORT: " + PORT);
});