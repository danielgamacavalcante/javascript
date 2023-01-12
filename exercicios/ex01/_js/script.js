

function carregar(){
    var data = new Date()
    var hora = data.getHours()
    var texto = document.querySelector('#textdiv')
    var img = document.querySelector('#imgid')

alert(`${hora}`)    
   
    if(hora >= 0 && hora <= 11){
        texto.innerHTML = `Bom dia, São ${hora} horas`
        img.src ='_img/m.png'
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora <=18){
        texto.innerHTML = `Boa tarde, São ${hora} horas`
        img.src ='_img/t.png'
        document.body.style.background = '#ca8b82'
    }else{
        texto.innerHTML = `Boa noite, São ${hora} horas`
        img.src ='_img/n.png'
        document.body.style.background ='#515154'
    }
}