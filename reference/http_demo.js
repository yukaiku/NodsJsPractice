const http = require("http");
http.createServer((req,res) => {
    //Write response
   res.write("Hello World");
   res.end();
}).listen(5000, ()=> console.log("server running"));
//cltr c to stop server running
