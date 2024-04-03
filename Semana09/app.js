//Exercicio 01
const express = require("express")

const app = express()

app.use(express.json())


//Exercicio 03
const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next();
};

app.use(logHoraMiddleware);

//Exercicio 05
app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

//Exercicio 02
app.get("/sobre", function(req, res){
    res.send("Essa é minha primeira aplicação")
})

app.get("/contato", function(req, res){
    res.send("Se você quiser mais informações escreva ao email rebeca@exemplo.com")
})

//Exercicio 04
app.get('/produto/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Este produto posee o ID: ${id}`);
});

//Exercicio 06
let users = []

app.post("/users", (req, res) => {
    const { nome, idade, cpf, tel } = req.body

    let novoUser = {nome, idade, cpf, tel}

    novoUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(novoUser)

    res.status(201).json(novoUser);
})

app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const usuario = users.find(item => item.id === parseInt(id));
    if (!usuario) {
        res.status(404).send("Usuario não encontrado.");
        return;
    }
    res.json(usuario);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const index = users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
        res.status(404).send("Usuario não encontrado.");
        return;
    }
    users[index] = { ...users[index], ...newData };
    res.status(200).json(users[index]);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
        res.status(404).send("Usuario não encontrado.");
        return;
    }
    users.splice(index, 1);
    res.status(200).send("Usuario deletado com sucesso.");
});

app.listen(3000, function(){
    console.log("Servidor Rodando!")
})

