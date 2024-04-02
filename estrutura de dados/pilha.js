function Pilha(){
    this.contador = 0;
    this.armazenamento = {};

    this.inserir = function (valor){
        this.armazenamento[this.contador] = valor;
        this.contador ++;
    }

    this.remover = function(){
        if(this.contador === 0){
            console.log(`Pilha está vazia, não há itens para remover`)
            return;
        }
        this.contador --;
        let resultado = this.armazenamento[this.contador];
        return resultado;
    }

    this.checarTopo = function(){
       let item = this.armazenamento[this.contador - 1]
       if (!item) {
            console.log(`Pilha está vazia, não há itens no topo`)
            return;
       }
       console.log(item)
       return;
    }

    this.tamanho = function(){
        console.log(this.contador)
        return;
    }
}


// para fins de testes
// let p1 = new Pilha()
// p1.inserir(3)
// p1.inserir(31)
// p1.remover()
// p1.remover()
// p1.remover()
// p1.checarTopo()
// p1.tamanho()

