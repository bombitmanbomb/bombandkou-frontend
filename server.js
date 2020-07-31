// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
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

app.use(express.static("dist"));

app.use('/api', require("./server/API"))

// listen for requests :)
const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
