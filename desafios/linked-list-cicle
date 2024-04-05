/* Linked List Cycle
dada cabeça (head da lista ligada) determine se a lista ligada tem um circulo em sua estrutura

 definição para a lista ligada
 
    function No(valor){
        this.valor = valor;
        this.proximo = null;
    }
*/

let eCircular = function(cabeca) {
    let ponteiroRapido = cabeca;
    let ponteiroDevagar = cabeca;

    while(ponteiroRapido && ponteiroRapido.proximo){
        ponteiroRapido = ponteiroRapido.proximo.proximo;
        ponteiroDevagar = ponteiroDevagar.proximo;

        if(ponteiroRapido === ponteiroDevagar){
            return true;
        }
    }
    return false;
}