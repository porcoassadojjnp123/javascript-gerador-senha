const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha>1){
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;

    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha<20){
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox')
 
for (i  = 0;i < checkbox.length; i++)
checkbox[i].onclick = geraSenha;
const letrasMaisculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasminusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '?@!%*';
geraSenha();


function geraSenha(){
    {let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaisculas;
}
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[0].checked){
    alfabeto = alfabeto + numeros ;}
    if (checkbox[0].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha ='';
    for (let i = 0; i <tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*letrasMaisculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaisculas[numeroAleatorio]
        
    }
    campoSenha.value = senha;    
    
}
    }
