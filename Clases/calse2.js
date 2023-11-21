const { use } = require('express/lib/application');
const http = require('http');

const PORT = 3000;

let users = [
    {
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      city: "New York"
    },
    {
      name: "Bob",
      age: 30,
      email: "bob@example.com",
      city: "San Francisco"
    },
    {
      name: "Charlie",
      age: 28,
      email: "charlie@example.com",
      city: "Los Angeles"
    }
  ];

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const nombre =req.url.split('?')[0].split('/')[1]
        console.log(nombre);
        res.writeHead(200, { 'Content-Type': 'text/plain' });

        const datosUsuario=users.find((user) => user.name == nombre);
        console.log(datosUsuario);

        if(datosUsuario){
            res.end(JSON.stringify(datosUsuario));    
        }
        else {
            res.end("No existe brother");
        }
  
  }





 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
      }
    });

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      