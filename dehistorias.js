//variables

let numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');
let btn3 = document.getElementById('btn2');

const sumar = () => {
    return numero.innerText++;
}

const restar = () => {
    if(numero.innerText>0){return numero.innerText--;
}
}


