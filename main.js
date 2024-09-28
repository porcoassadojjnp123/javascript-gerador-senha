const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const vogaismaiusculas = 'AEIOU';
const consoantesminusculas = 'bcdfghjklmnpqrstvwxyz';
const numerospares = '2468';
const numerosinpares = '13579';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}


for (i  = 0;i < checkbox.length; i++){
checkbox[i].onclick = geraSenha;
}

geraSenha();


function geraSenha(){
    let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + vogaismaiusculas;
}

if (checkbox[1].checked){
    alfabeto = alfabeto + consoantesminusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numerospares };
    if (checkbox[3].checked){
        alfabeto = alfabeto + numerosinpares;
    }

    let senha ='';
    for (let i = 0; i <tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    
    campoSenha.value = senha;    
    classificaSenha()
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    if(tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12){
        forcaSenha.classList.add('media');
    } else if (tamanhoSenha <= 5){
        forcaSenha.classList.add('fraca');
    }
    }


