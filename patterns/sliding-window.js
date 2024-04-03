function somaMaximaSubarray(arr, tamanhoJanela){
    if(tamanhoJanela > arr.length){
        return null;
    }

    let somaMaxima = 0;
    let somaTemporaria = 0;

    // inicializando a janela
    for(let i = 0; i < tamanhoJanela; i++){
        somaMaxima += arr[i];
    }

    somaTemporaria = somaMaxima;

    // deslizando a janela sobre o array
    for(let i = tamanhoJanela; i < arr.length; i++){
        somaTemporaria = somaTemporaria - arr[i - tamanhoJanela] + arr[i]
        somaMaxima = Math.max(somaMaxima, somaTemporaria)
    }

    return somaMaxima;
}

const listaNumeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const janela = 4;

console.log(somaMaximaSubarray(listaNumeros, janela))