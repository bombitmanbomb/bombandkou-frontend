const api = require('express').Router();

api.all('*',(req,res)=>{
  console.log(req.url)
  return res.status(200).json({url:req.url,method:req.method,API:"v1"})
});

module.exports = api;