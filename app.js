const http = require('http');
const fs = require('fs');


const port = 5000;


const routeMap = {
    '/' : 'index.html',
    '/projects' : 'projects.html',
    '/contact' : 'contact.html',
}


const Listener = function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'})

    console.log(req.url)

    if(routeMap[req.url]){
        fs.readFile(routeMap[req.url], (error, data) => {
            // res.write(data);
            res.end(data);
        })
    }
    else {
        res.writeHead(404)
        res.end("<h1>Sorry, page not found</h1>");
    }
}

const server = http.createServer(Listener);

server.listen(port, function(error, data){
    if(error){
        console.log(`Error: ${error}`)
    }
    else{
        console.log(`Server is running at http://localhost:${port}`)
    }
})