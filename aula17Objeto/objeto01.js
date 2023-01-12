let amigo = {nome: 'lucas',
sexo: 'M',
idade: 32,
peso: 78.2,
engordar(n=0){
    console.log('Engordou!')
    this.peso += n

},
emagrecer(n=0){
    console.log('Emagreceu')
    this.peso -= n
}
}

console.log(`Amigo pesa ${amigo.peso}`)
amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}`)

amigo.emagrecer(2.3)
console.log(`${amigo.nome} pesa ${amigo.peso}`)