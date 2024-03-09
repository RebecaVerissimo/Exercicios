//Exercicio01
class Produto{
    nome;
    preco;
    quantidade;

//Exercicio02    
    constructor(valorNome, valorPreco, valorQuantidade){
        this.nome = valorNome
        this.preco = valorPreco
        this.quantidade = valorQuantidade
    }

//Exercico03    
    Vender(quantidadeVendida){
        if(quantidadeVendida > this.quantidade){
            console.log(`Estoque Insuficiente! Existe apenas ${this.quantidade}`)
            return
        }
        this.quantidade -= quantidadeVendida
    }

//Exercico04    
    Repor(quantidadeResposta){
        this.quantidade += quantidadeResposta
    }

//Exercico05    
    MostrarEstoque(){
        console.log(`O produto ${this.nome} custa R$ ${this.preco} e tem ${this.quantidade} disponíveis`)
    }
 
//Exercicio06    
    AtualizarPreco(novoValor){
        this.preco = novoValor
    }
}



let livro =  new Produto("livro", 100, 20)
livro.Vender(5)
livro.Repor(3)
// console.log(livro)
livro.AtualizarPreco(95)
livro.MostrarEstoque()

//Exercicio07
class Pessoa {
    nome;
    idade;
    profissao;

    constructor(valorNome, valorIdade, valorProfissao){
        this.nome = valorNome
        this.idade = valorIdade
        this.profissao = valorProfissao
    }
}

//Exercicio08
class Cliente extends Pessoa{
    telefone;
    email;
    clienteDesde;

    constructor(valorNome, valorIdade, valorProfissao, valorTelefone, valorEmail, valorClienteDesde){
        super(valorNome, valorIdade, valorProfissao)
        this.telefone = valorTelefone
        this.email = valorEmail
        this.clienteDesde = valorClienteDesde
    }
}

let clienteRebeca =  new Cliente("Rebeca", 26, "Engenheira", "555-55-55", "Rebeca@gmail.com", "2015-05-18")
console.log(clienteRebeca)