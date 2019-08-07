const http = require('http');

const site = http.createServer(function(req,res){
    console.log('Hello world');
});
site.listen(3000);