export class Produtos {
    
    constructor(public id: number, public nome: String, public preco: number, private desconto: number = 10) {

    }

    public aplicarDesconto = (preco: number)  => {
        preco = preco - this.desconto
        return preco 
    }

}