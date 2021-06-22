// console.log("Hello from node js");
//
// const Person = require('./person');
// const calculateAge = require('./calculateAge');
// age = calculateAge("1997/06/14");
//
// person1 = new Person("Kai", age.toString());
//
//
// console.log(person1.greetings());

//Loggers
// const Logger = require("./logger");
// const logger = new Logger();
//
// logger.on("message", (data) => console.log('Called Listener:', data));
// logger.on("data", (data) => console.log('Called Listener:', data));
//
// logger.log("Hello World");
// logger.log("Test");

//End of Logger

//HTTP Stuff

//npm run dev after editting package to run it with nodemon
// node index to run normally
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(
    (req,res) => {
    //     if(req.url == "/"){
    //         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) =>
    //         {
    //             if(err) throw err;
    //             res.writeHead(200, {'Content-type': 'text/html'});
    //             res.end(content);
    //         })
    //
    //         //Testing write to html
    //         // res.writeHead(200, {'Content-type': 'text/html'})
    //         // res.end('<h1>hellokap</h1>');
    //     }
    //     if(req.url == "/about"){
    //         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) =>
    //         {
    //             if(err) throw err;
    //             res.writeHead(200, {'Content-type': 'text/html'});
    //             res.end(content);
    //         })
    //     }
    //     if(req.url == "/api/users"){
    //         const users = [
    //         {name: 'Bob Smith', age: 40},
    //         {name: 'alan smith', age: 30}
    //         ];
    //         res.writeHead(200, {'Content-type': 'application/json'}); //write head
    //         res.end(JSON.stringify(users)); //write body
    //     }
    //
    //     console.log(req.url);
        // Build file path
        let filePath = path.join(__dirname,
            'public',
            req.url === "/" ? 'index.html' : req.url); // if url = / let filepath = index else req.url

        //Extension of the file
        let extname = path.extname(filePath);

        //initial content type
        let contentType = 'text/html';

        //Check ext and set content type
        switch (extname){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType: 'application/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'images/jpg';
                break;
        }

        //Read File
        fs.readFile(filePath, (err,content) =>{
            if(err){
                if(err.code == 'ENOENT'){
                    // Page not found
                    fs.readFile(path.join(__dirname, 'public', '404.html'),
                        (err, content)=>{
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                        }
                    )
                }else{
                    //Some sever error
                    res.writeHead(500);
                    res.end(`Sever Error: ${err.code}`);
                }
            }else{
                //Success
                res.writeHead(200, {'Content-Type': contentType});
                res.end(content,'utf8');
            }
        });
    });

// look for port if not def 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`sever running on ${PORT}`));