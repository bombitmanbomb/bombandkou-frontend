const api = require('express').Router();

api.all('*',(req,res)=>{
  console.log("dev:",req.method,":",req.url)
  return res.status(200).json({url:req.url,method:req.method,API:"dev"})
});

module.exports = api;