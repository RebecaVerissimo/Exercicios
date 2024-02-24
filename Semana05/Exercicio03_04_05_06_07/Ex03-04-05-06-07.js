
//Exercicio03:
const prompt = require("prompt-sync")()
const numeros = []

for(let i = 0; i < 5; i++){
    const numero = parseInt(prompt(`Digite o ${i + 1}° número: `))
    numeros.push(numero)
}

for(let i = 0; i < 5; i++){
    console.log(`O ${i + 1}° número é ${numeros[i]}`)
}

//Exercicio 04:
const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual
}, 0)

console.log("A soma dos numeros é:", soma)

//Exercicio 05:
const numerosOrdenados = [...numeros]
numerosOrdenados.sort((a, b) => a - b)
console.log("A orden crescente dos números é: ", numerosOrdenados)

//Exercicio 06:
const pares = numeros.filter(numeroAtual => {
    if(numeroAtual % 2 == 0){
        return true
    }
})
console.log("O array com números pares é: ", pares)

//Exercicio 07
const quadrados = numeros.map(numeroAtual => numeroAtual ** 2)

console.log("O quadrado dos números é: ", quadrados)