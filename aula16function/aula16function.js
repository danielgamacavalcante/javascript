let v = function impaPar(n=0){
    if(n%2==0){
        return console.log('Valor é par!')
    }else{
        return console.log('Valor é impar!')
    }
}
console.log(`${v(11)}`)

//Do que você já sabe de função o que difere aqui é que uma variável pode receber uma função e um parametro pode já ser iniciado na função ex
// n = 0
console.log('----------------//-------------------')
//Função recursiva
function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }
}
var valor = 5

console.log(`O valor fatorial de ${valor} é ${fatorial(valor)}`)