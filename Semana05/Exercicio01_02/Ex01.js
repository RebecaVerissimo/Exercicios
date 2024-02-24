// const frutas = ["Melancia", "Uva", "Coco"]
// console.log(frutas[1])

//resolução com prompt-sync
const prompt = require("prompt-sync")()
const frutas = []

for(let i = 0; i < 3; i++){
    frutas.push(prompt("Digite o nome da fruta: "))
}
console.log(frutas[1])