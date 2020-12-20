// create an express app
const express = require("express");
const app = express();

// use the express-static middleware
app.use(express.static('./dist/socgamify'));

// define the first route
app.get("/*", function (req, res) {
  res.sendFile('index.html', {root: 'dist/socgamify/index.html'}
  );

});

// start the server listening for requests
app.listen(process.env.PORT || 8080, 
	() => console.log("Server is running... http://localhost:8080/"));
