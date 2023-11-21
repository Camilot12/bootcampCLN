//Clase de nodejs -- clase de crear un API

//require()

//---------------------------------
//const os=require('os') 
//console.log(os.hostname())

//---------------------------------
//const path = require('path')
//const filename = 'file1.txt';
//const fullPath = path.join(__dirname,  filename);
//console.log('LA NUEVA RUTA ES:', fullPath)
//console.log(path.dirname(fullPath))



//---------------------------------


const http = require('http');

const PORT = 3000;


// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {

    const nombre=req.url.split('?')[0]
    const edad=req.url.split('?')[1]
    const bandera=req.url.split('?')[2]
    //const newBandera = bandera.slice(1)
    console.log(nombre)
    console.log(edad)
    console.log(bandera)
    const newNombre = nombre.slice(1)
    console.log(newNombre)
    const fs=require('fs')
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (edad >= 18 && bandera == 'si') {
        console.log('Hola '+newNombre+' eres mayor de edad\n')
        res.end('Hola '+newNombre+' eres mayor de edad\n');
        //fs.writeFileSync('edad.txt','Hola '+newNombre+' eres mayor de edad\n', function (){
        //console.log('Archivo Creado')
        //})   
        fs.appendFileSync('edad.txt','Hola '+newNombre+' eres mayor de edad\n')     
    }
    else if (edad >= 18 && bandera == 'no') {
      console.log('Hola '+newNombre+' eres mayor de edad\n')
      
    else{
        console.log('Hola '+newNombre+' eres menor de edad\n')
        res.end('Hola '+newNombre+' eres menor de edad\n');
        //fs.writeFileSync('edad.txt','Hola '+newNombre+' eres menor de edad\n', function (){
        //console.log('Archivo Creado')
        //})
    }
    
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


