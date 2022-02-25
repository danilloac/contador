var numeroAtualSpam = document.getElementById('currentNumber');
var numeroAtual = 0;

function increment(){
    numeroAtual = numeroAtual +1;
    numeroAtualSpam.innerHTML = numeroAtual;
}

function decrement () {
    numeroAtual = numeroAtual -1;
    numeroAtualSpam.innerHTML = numeroAtual;
}
