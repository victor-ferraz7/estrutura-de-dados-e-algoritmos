// Dado um array classificado em ordem crescente, 
// encontre dois números de forma que a soma deles resulte em um alvo específico. 
// Retorne os índices dos dois números.

function somaDois(listaNumeros, alvo){
    let esquerda = 0;
    let direita = listaNumeros.length - 1;

    while( listaNumeros[esquerda] + listaNumeros[direita] !== alvo){
        
        if(listaNumeros[esquerda] + listaNumeros[direita] < alvo){
            esquerda++
        }else{
            direita--;
        }
        console.log(`esquerda${esquerda} e direita ${direita}`)
    }
    return console.log([esquerda, direita])
}

let numeros = [2,3,4,5,6,7,8,11,13,15]
somaDois(numeros, 10)