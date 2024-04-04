// 2 ponteiros: 
// O padrão de 2 ponteiros está expresso nas variáveis esquerda e direita que apontam para índices dentro do array


function acharSomaPar(arr, soma){
    let esquerda = 0;
    let direita = arr.length - 1;

    while(esquerda < direita){
        let somaAtual = arr[esquerda] + arr[direita]
        console.log(somaAtual)

        if(somaAtual === soma){
            return [esquerda, direita]
        }
        else if(somaAtual < soma){
            esquerda++;
        }
        else{
            direita--;
        }
    }
    return console.log('Não tem soma par')
}

let numeros = [1,2,3,4,5,6,7,8]
acharSomaPar(numeros, 2)