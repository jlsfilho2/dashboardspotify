
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
const router = express.Router();
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/autenticacao'));
app.use(express.static(__dirname + '/dashboard'));
app.use(express.static(__dirname + '/login'));
app.use(express.static(__dirname));
app.use(bodyParser.json())



const knex = require('knex')({
    client: 'postgresql',
    connection: {
    host: 'localhost',
    user : "sistema",
    password : "admin",
    database:"api5",
    host : "localhost"
    }
});


router.post('/usuarios', (req,res)=> {
    console.log("body " + req.body);
    console.log("inserindo "  +req.body.idUser + ", genero " + req.body.genero);
    let idspotify = req.body.idUser;
    let genero = req.body.genero;
        knex('usuariosspotify')
        .insert({
            idspotify, genero
           })
           .returning(['idspotify', 'genero'])
           .then(user=>{
            if(!user)
            return res.send(new erros.BadRequestError("erro ao inserir dados "));
           else res.send(user)
           });
        });
// app.use(express.static(__dirname + '/servicos'));
app.use("/", router);
console.log('Listening on 8001');
app.listen(8001);

