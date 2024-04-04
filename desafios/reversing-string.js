// 344. Reverse String
// Escreva uma função que inverta uma string. A string de input é dada como um array de caracteres.
// Você deve fazer isso modificando o array de input localmente

let  inverterTexto = function(texto){
    let esquerda = 0;
    let direita = texto.length - 1 // tamanho do array -1 que é o índice do ultimo elemento

    while(esquerda < direita){
        let temporaria = texto[esquerda]

        texto[esquerda] = texto[direita] 
        texto[direita] = texto[temporaria]

        direita--;
        esquerda++;
    }

}

let texto = ["h","e","l","l","o"] 
inverterTexto(texto)