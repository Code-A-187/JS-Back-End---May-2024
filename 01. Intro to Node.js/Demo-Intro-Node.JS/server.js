const http = require('http')

const server = http.createServer((req, res) => {
    console.log("Web request");
    console.log('HTTP Version: ', req.httpVersion)
    console.log('HTTP Method: ', req.method)
    console.log('URL: ', req.url)

    if (req.url === '/') {
        res.write('Home page content');
    }   else if (req.url === '/cats') {
        res.writeHead(200, {
            'Conten-type': 'text/plain'
        });
        res.write('<h1>Cats page</h1>');
    
    } else {
        res.write('Other page');
    }

    res.end()
});

server.listen(5000);
console.log("Server is running on port 5000...");