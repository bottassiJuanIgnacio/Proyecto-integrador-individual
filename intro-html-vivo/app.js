const express = require("express");

const path= require('path');

const app =  express();

app.use(express.static(path.resolve(__dirname,"public")))

app.listen(process.env.PORT || 3000, () =>{
    console.log("Nuestro puerto 3000 esta levantado");
});

app.get('/home', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})
app.post('/register', (req,res)=>{
    res.send("Felicitaciones, tu registro a sido exitoso !")
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})
app.post('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})