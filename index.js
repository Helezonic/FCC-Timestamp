
const express = require('express');
const app = express();
const checkFormat = require('./Controllers/timestamps.js');
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');

app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/",  (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello",  (req, res) => {
  res.json({greeting: 'hello API'});
});

//Timestamp code
app.get("/api/:time", (req,res) => {  
  res.json(checkFormat(req.params.time))
})


// Listen on port set in environment constiable or default to 3000
const listener = app.listen(process.env.PORT || 4000,  () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
