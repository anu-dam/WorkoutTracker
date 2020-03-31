const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Sets up port for server, either on Heroku or localhost:3000
const PORT = process.env.PORT || 3000;

// This requires all of our models from the models folder
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MongoDB_URI referenced in .env

mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { useUnifiedTopology: true, useNewUrlParser: true }
);

// Requiring routes so the app knows where to go
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Starting server
app.listen(PORT, function (){
    console.log(`App running on: http://localhost:${PORT}`);
});
