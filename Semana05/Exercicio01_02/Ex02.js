const prompt = require("prompt-sync")({sigint: true})
const frutas = []

for(let i = 0; i < 3; i++){
    frutas.push(prompt("Digite o nome da fruta: "))
}

frutas.push(prompt("Digite uma fruta adicional: "))

frutas.shift()

console.log(frutas)