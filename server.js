const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Starts the server to beigin listening
app.listen(PORT, function() {
    console.log(`Now listening to PORT ${PORT}`);
});