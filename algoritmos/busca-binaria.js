function buscaBinaria(lista, valorDesejado) {
    let baixo = 0
    let alto = lista.length -1
    let meio

    while(baixo <= alto){
        meio = Math.round((baixo + alto)/2)

        if (lista[meio] < valorDesejado){
            baixo = meio + 1
        }
        else if(lista[meio] > valorDesejado){
            alto = meio - 1
        }
        else {
            return meio
        }
    }
}


let listaNumeros = [1,2,3,4,5,6,7,8,9,12,15,17,25]

console.log(buscaBinaria(listaNumeros,12))