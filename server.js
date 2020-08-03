// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const path = require("path")
//const cors = require("cors")
//app.use(cors())
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
app.all("*",(req,res,next)=>{
  console.log(`${req.ip}-${req.method}: ${req.url}`)
  next()
})

app.use('/api', require("./server/API"))
app.get("/:assetType/:assetFile", (req, res, next) => {
  switch (req.params.assetType) {
    case "css":
    case "js":
      return res.sendFile(path.join(__dirname, `/dist/${req.params.assetType}/${req.params.assetFile}`), {
        dotfiles: "ignore"
      }, (err) => err ? res.sendStatus(404) : console.log(`SENT /dist/${req.params.assetType}/${req.params.assetFile}`));
    default:
      return next();
  }
})
app.get("*", (req, res, next) => {
  console.log("SENT /dist/index.html")
  res.sendFile(path.join(__dirname, "dist/index.html"))
})
// listen for requests :)
const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Your app is listening on port " + listener.address().port);
});