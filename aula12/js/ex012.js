 
var valorHora = '02:56'
console.log(valorHora)
console.log(`Horário: ${tratarHorario(valorHora)}`)
saudação(tratarHorario(valorHora))


    function tratarHorario(textoHorario){
        var horario = textoHorario.substring(0,2)
        return horario
        }

    function saudação(num){
    if(num >=0 && num <=5){
        console.log('Boa madrugada de trabalho!')
    }else if(num > 5 && num < 12 ){
        console.log("Bom dia de trabalho!")
    } else if(num >=12 && num < 18 ){
        console.log('Boa tarde de trabalho!')
    }else{
        console.log('Boa noite')
    }
/*
function tratarHorario(textoHorario){
var horario = textoHorario.substring(0,2)
var minuto = textoHorario.substring(3)
return [Number(horario), Number.parseInt(minuto)]
}
*/
}