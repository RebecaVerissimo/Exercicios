const exercicio = (array)=>{
    let soma = 0;
    for(let item of array){
        soma += item;
    }
    let media = soma/array.length;
    console.log(media)
}

let arrayNumeros = [9, 5, 3, 9];

exercicio(arrayNumeros);