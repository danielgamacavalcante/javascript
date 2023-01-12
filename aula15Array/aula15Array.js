let num = [5,4,8,2] //array em tipo let funciona dentro do bloco
var nomes = [' fabio',' adriano',' david',' veronica',' yago',' laura',' natanal'] //array de nomes em tipo var funciona até fora do bloco

console.log(`O array de Números tem ${num} números`)
console.log(`O array de núemros têm ${num.length} posições`)
console.log('')
console.log(`O array de nomes possui tais nomes: ${nomes}`)
console.log(`O array de nomes possui ${nomes.length} posições`)
console.log(`Ordenado vetor de nomes: ${nomes.sort()}`)
console.log(`A Última posição do array nomes: ${nomes[nomes.length - 1]}`)
nomes.push(' Lucas') //Adicionando o nome lucas no array nomes
nomes[0] = ' Ana' //Trocando o nome da primeira posição do array Nomes
console.log(`O novo array de nome ficou: ${nomes}`)

for(let n = 0; n < nomes.length;n++){
    console.log(`Primeiro nome da posição ${n} nome: ${nomes[n]}`)
}
console.log('')
//For de ordenação de array mais simples obs: com array ordenado (sort()) do menor pro maior
for(let pos in num.sort()){
    console.log(`Posição ${pos} valor ${num[pos]}`)
}

console.log("-----------------------//----------------------------")
let valor = num.indexOf(5)
if(valor != -1){
    console.log(`O valor procurado ${num[valor]} está na posição ${valor}`)
}else{
    console.log('O valor procurado não foi encontrado!')
}
