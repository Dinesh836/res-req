const http= require('http');

const server=http.createServer((req,res) => {
    console.log(req.url,req.method,req.headers);
    // process.exit();
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h2>hello from my node js server</h2></body>')
    res.write('</html>');
    res.end(); 
})
server.listen(4000);
