const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title></title></head>')
        res.write('<body><h1>Welcome to my Node.js HomePage</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if(url === '/home'){
        res.write('<html>')
        res.write('<head><title></title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if(url === '/about'){
        res.write('<html>')
        res.write('<head><title></title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    else if(url === '/node'){
        res.write('<html>')
        res.write('<head><title></title></head>')
        res.write('<body><h1>Welcome to Node.js project</h1></body>')
        res.write('</html>')
        return res.end();
    }

})

server.listen(4000);