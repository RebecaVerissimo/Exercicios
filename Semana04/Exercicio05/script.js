let totalRuins = 0;
let contador = 0;
while (contador < 4){
    let resposta = prompt("Qual a sua avaliação para a serie Stranger Things? (bom), (ruim) ou (exelente)")
    if( resposta == "ruim"){
        totalRuins++;
    }

    contador++;
}

console.log(`Total de usuarios que não gostou da serie: ${totalRuins}`);
