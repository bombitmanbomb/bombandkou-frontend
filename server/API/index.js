const routes = require('express').Router();

var fs = require('fs');
const api = require('./v1');
var getDirs = function(rootDir, cb) { 
    fs.readdir(rootDir, function(err, files) { 
        var dirs = []; 
        for (var index = 0; index < files.length; ++index) { 
            var file = files[index]; 
            if (file[0] !== '.') { 
                var filePath = rootDir + '/' + file; 
                fs.stat(filePath, function(err, stat) {
                    if (stat.isDirectory()) { 
                        dirs.push(this.file); 
                    } 
                    if (files.length === (this.index + 1)) { 
                        return cb(dirs); 
                    } 
                }.bind({index: index, file: file})); 
            }
        }
    });
}
getDirs('./server/API',setRoutes)
var api_cache = []
function setRoutes(vars){
  for (version of vars){
    api_cache.push(version)
    routes.use(`/${version}`,require(`./${version}`))
  }
  routes.all("*", (req,res,next)=>{
      if (req.method=="OPTIONS") {
          return res.status(200).json(api_cache.filter((endpoint)=>{return !endpoint.startsWith("_")}))
      }
      next()
  })
  routes.all("*", (req,res)=>{res.status(400).json({error:"Supply valid api version", 'Versions':api_cache.filter((endpoint)=>{return !endpoint.startsWith("_")})})})
}


module.exports = routes;