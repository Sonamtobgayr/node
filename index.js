
const http = require('http');
const fs = require('fs');


const port = 3000;


const routes = {
  '/': 'index.html',
  '/page1': 'page1.html',
  '/page2': 'page2.html',
  '/page3': 'page3.html',
  '/page4': 'page4.html',
  '/page5': 'page5.html'
};


const server = http.createServer((req, res) => {

  const url = req.url;


  const filePath = `./${routes[url]}`;

 
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
