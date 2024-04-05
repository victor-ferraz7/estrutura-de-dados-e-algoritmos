/* Dada uma lista ligada, retorne o nó que o circulo começa. Se não houver circulo, retorne null. 
PS: Note que não pode modificar a lista */

let detectarCiclo = function(cabeca){
    if(!cabeca){
        return null
    }

    if(!cabeca.next){
        return null
    }

    let ponteiroRapido = cabeca;
    let ponteiroDevagar = cabeca;
    let ponteiro = cabeca;

    while(cabeca && cabeca.proximo){
        ponteiroRapido = ponteiroRapido.proximo.proximo;
        ponteiroDevagar = ponteiroDevagar.proximo;

        if(ponteiroRapido === ponteiroDevagar){
            break;
        }
    }

    while(ponteiro !== ponteiroDevagar){
        ponteiro = ponteiro.proximo;
        ponteiroDevagar = ponteiroDevagar.proximo;
    }

    return ponteiroDevagar;
}