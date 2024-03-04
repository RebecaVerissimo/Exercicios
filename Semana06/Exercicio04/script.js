let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let email = prompt("Digite seu email");

const user = {
  nome: nome,
  idade: idade,
  email: email,
}

localStorage.setItem("user", JSON.stringify(user))

// localStorage.setItem("name", user.nome)
// localStorage.setItem("age", user.idade)
// localStorage.setItem("mail", user.email)