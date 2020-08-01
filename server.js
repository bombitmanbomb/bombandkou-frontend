// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
var history = require('connect-history-api-fallback');
const app = express();
const path = require("path")
function checkHttps(req, res, next) {
  // protocol check, if http, redirect to https

  if (req.get("X-Forwarded-Proto").indexOf("https") != -1) {
    console.log("https, yo");
    return next();
  } else {
    console.log("just http");
    res.redirect("https://" + req.hostname + req.url);
  }
}
app.set("trust proxy");


app.use('/api', require("./server/API"))
app.get("*",(req,res,next)=>{res.sendFile(path.join(__dirname,"dist/index.html"))})
// listen for requests :)
const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
