function adicao(num1, num2, funcaoAnonima){
    let soma = num1 + num2;
   
    funcaoAnonima(soma);
}

adicao(2, 8, (sum)=> {
    console.log("O resultado final e: "+ sum);
})
