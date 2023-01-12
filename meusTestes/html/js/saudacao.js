const txtHorarioInformado = document.querySelector('input#inputTxtH')
var varDivHora = document.querySelector('div#divHorário')
var varDivHpt2 = document.querySelector('div#divHpt2')
var textoParagrafo = document.getElementById('textoP')


function clickSaudacao(){
 
varDivHora.innerHTML = varDivHora.innerHTML + tratarHorario(txtHorarioInformado.value) + varDivHpt2.innerHTML 
+'<p>'+ textoParagrafo.innerHTML + '</p>' //printa ex: Horário Informado: 23 Horas <p> Por isso espero que você tenha um(a): </P>
varDivHora.hidden=false //mostra o hidden escondido
saudação(tratarHorario(txtHorarioInformado.value)) //condição vinda da função saudação
}

function tratarHorario(textoHorario){
    var horario = textoHorario.substring(0,2)
    return Number(horario)
    }

function saudação(num){
    var divResposta = document.getElementById('divResultado')
    if(num >=0 && num <=5){
        divResposta.innerHTML = 'Boa madrugada de trabalho!'
    }else if(num > 5 && num < 12 ){
        divResposta.innerHTML = "Bom dia de trabalho!"
    } else if(num >=12 && num < 18 ){
        divResposta.innerHTML = 'Boa tarde de trabalho!'
    }else{
        divResposta.innerHTML = 'Boa noite de trabalho!'
    }
}