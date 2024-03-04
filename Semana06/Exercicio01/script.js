let numero = prompt("Digite um numero");

// let numeroPar = new Promise((resolve, reject)=>{
//         if(numero % 2 == 0){
//             resolve("é par")
//         } else {
//             reject("Error: número informado é impar")
//         }
//     })

    // numeroPar(numero)
    // .then((mensagem)=>{
    //     document.write(`O número ${numero} `, mensagem)
    // })
    // .catch((mensagem)=>{
    //     document.write(mensagem)
    // })


function numeroPar(numero){
    return new Promise((resolve, reject)=>{
        if(numero % 2 == 0){
            resolve("é par")
        } else {
            reject("Error: número informado é impar")
        }
    })
}

numeroPar(numero)
.then((mensagem)=>{
    document.write(`O número ${numero} `, mensagem)
})
.catch((mensagem)=>{
    document.write(mensagem)
})