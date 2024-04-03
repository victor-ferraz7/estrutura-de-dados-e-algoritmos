function No(elemento){
    this.elemento = elemento;
    this.proximo = null
}

function ListaLigada(){
    let comprimento = 0;
    let primeiroElemento = null;

    this.tamanho = function(){
        return console.log(comprimento)
    }

    this.cabeca = function(){
        return console.log(primeiroElemento)
    }

    this.adicionar =  function(elemento){
        let no = new No(elemento)

        if(!primeiroElemento){
            primeiroElemento = no
        }
        else{
            let noAtual = primeiroElemento;

            while(noAtual.proximo){
                noAtual = noAtual.proximo
            }
    
            noAtual.proximo = no;
        }
        comprimento++;
    }

    this.remover = function(elemento){
        let noAtual = primeiroElemento;
        let noAnterior;

        if(noAtual.elemento === elemento){
            primeiroElemento = noAtual.proximo;
        }
        else{
            while(noAtual.elemento !== elemento){
                noAnterior = noAtual;
                noAtual = noAtual.proximo;
            }
            noAnterior.proximo = noAtual.proximo;
        }
        comprimento--;
    }

    this.estaVazia = function(){
        return console.log(comprimento === 0)
    }

    this.indiceDe = function(elemento){
        let noAtual = primeiroElemento
        let indice = -1;

        while(noAtual){
            indice++;

            if(noAtual.elemento === elemento){
                return console.log(indice)
            }

            noAtual = noAtual.proximo
        }

        return console.log(-1)
    }

    this.elementoEm = function(indice){
        let noAtual = primeiroElemento;
        let contador = 0;

        while(contador < indice){
            contador++;
            noAtual = noAtual.proximo;
        }

        return console.log(noAtual.elemento)
    }

    this.adicionarEm = function(indice, elemento){
        let no = new No(elemento);
        let noAtual = primeiroElemento;
        let noAnterior;
        let indiceAtual = 0;

        if(indice > comprimento) {
            return false;
        }

        if(indice === 0){
            no.proximo = noAtual;
            primeiroElemento = no;
        }
        else{
            while(indiceAtual < indice){
                indiceAtual++;
                noAnterior = noAtual;
                noAtual = noAtual.proximo;
            }
            no.proximo = noAtual;
            noAnterior.proximo = no;
        }
        comprimento++
    }

    this.removerEm = function(indice){
        let noAtual = primeiroElemento;
        let noAnterior;
        let indiceAtual = 0;

        if(indice < 0 || indice >= comprimento){
            return null;
        }

        if(indice === 0){
            primeiroElemento = noAtual.proximo;
        }
        else{
            while(indiceAtual < indice){
                indiceAtual++;
                noAnterior = noAtual;
                noAtual = noAtual.proximo;
            }
            noAnterior.proximo = noAtual.proximo;
        }
        comprimento--;
        return noAtual.elemento
    }
}


// para fins de testes
// let n1 = new No(33)
// let n2 = new No(45)
// let n3 = new No(99)

// let lista1 = new ListaLigada()
// lista1.adicionar(n1)
// lista1.adicionar(n2)
// lista1.adicionar(n3)

// lista1.estaVazia()
// lista1.tamanho()
// lista1.remover(n3)
// lista1.tamanho()