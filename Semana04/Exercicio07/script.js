let produtoFavorito = 0;
let quantidadeInicial = 0;
let resposta;


do{
    resposta = prompt("Qual produto deseja comprar? (1)Hortifruti, (2)Laticínios, (3)Carnes, (4)Peixes, (5)Aves, (6)Fechar pedido.")
    
    if(resposta < 6){
        let quantidade = prompt("Que quantidade deseja deste produto?")
        
        if(quantidade > quantidadeInicial){
            quantidadeInicial = quantidade
            produtoFavorito = resposta
        }
    }
} while (resposta != 6)

switch(produtoFavorito){
    case "1": console.log("O produto favorito do cliente é Hortifruti");
    break;
    case "2": console.log("O produto favorito do cliente é Laticínios");
    break;
    case "3": console.log("O produto favorito do cliente é Carnes");
    break;
    case "4": console.log("O produto favorito do cliente é Peixes");
    break;
    case "5": console.log("O produto favorito do cliente é Aves");
    break;
}