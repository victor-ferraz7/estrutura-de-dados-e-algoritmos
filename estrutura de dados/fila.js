function Fila(){
    let itens = []

    this.printar = function(){
        console.log(itens)
        return;
    }

    this.enfileirar = function(elemento){
        itens.push(elemento)
    }

    this.desenfileirar = function(){
        itens.shift();
        return;
    }

    this.primeiroItem = function(){
        console.log(itens[0])
        return;
    }

    this.estaVazio = function(){
        console.log(itens.length === 0)
    }

    this.size = function(){
        console.log(itens.length)
    }
}

// para fins de testes
// let fq = new Fila();
// fq.enfileirar(1)
// fq.enfileirar(15)
// fq.enfileirar(41)
// fq.enfileirar(21)
// fq.enfileirar(12)
// fq.printar()
// fq.estaVazio()
// fq.size()