const express = require('express');
require('dotenv/config');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const session = require("express-session");
app.use(session({
    secret: 'clinica',
    saveUninitialized: false,
    resave: false
}));
const MedicoModel = require("./models/MedicoModel");
const PacienteModel = require("./models/PacienteModel");
const UsuarioModel = require("./models/UsuarioModel");
app.set('view engine', 'ejs');

const medicoRoutes = require("./routes/medicoRoutes");
app.use(medicoRoutes);

const pacienteRoutes = require("./routes/pacienteRoutes");
app.use(pacienteRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);

app.get("/", function(req, res){
    const usuario = {
        nome: "Maria",
        email: "maria@gmail.com",
        senha: "*****"
    };
    
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
   
});

   
app.listen(process.env.PORT, function(){
    console.log("Rodando...");
});