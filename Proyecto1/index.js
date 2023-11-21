const express=require('express');
const app=express();
const port=3000;


// Vamos a escuchar las llamadas

//app.listen(port, function(){ //Normal Function
//console.log('The app is running');
//})


app.listen(port,() => console.log('The app is running, Arrow Function')); //Arrow Function

//_------------------------- METODO GET
// Cada endpoint es una ruta que puede manejar el backend
app.get('/', function(req,res){
    return res.send('Hellow World!');
});

//const users=["nombre1","nombre2","nombre3","nombre4","nombre5","nombre6"];
let users = [{
    id:0,
    name:'Juan',
    lastname:'Ramos'    
},
{
    id:1,
    name:'Andrea',
    lastname:'Linares'    
},
{
    id:2,
    name:'Pablito',
    lastname:'Perez'    
}

];

// app.get('/users', function(req,res){
//     return res.send(users)
// })

app.get('/users/:id', function(req,res){
    const index = req.params.id; //index 1, 2, ...
    return res.send(users[index]);
})

// app.get('/users', function(req,res){
//     return res.send(users)
// })


app.get('/users', function(req,res){
    const name = req.query.name;
    const lastname = req.query.lastname
    if(name || lastname){
    let found = users.find(user =>  user.name === name || user.lastname === lastname);
    console.log(name)
    console.log(lastname)
    return res.send(found)
    }
    return res.send(users)
})