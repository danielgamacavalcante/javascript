var data = new Date()

function horario(){
    var hora = data.getHours()
    var textoHorario = document.querySelector('#msgHorario')
    var img = document.getElementById('imgGroup1')

    if(hora >=0 && hora<12){
        textoHorario.innerHTML=`Bom dia, são ${hora}:${data.getMinutes()} horas`
        img.src='_img/m.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora<=18){
        textoHorario.innerHTML=`Boa tarde, são ${hora}:${data.getMinutes()} horas`
        img.src='_img/t.png'
        document.body.style.background='#ca8b82'
    }else{
        textoHorario.innerHTML=`Boa noite, são ${hora}:${data.getMinutes()} horas`
        img.src='_img/n.png'
        document.body.style.background='#515154'
    }    
}

function verificar(){
    var ano = data.getFullYear()
    //Data
    var anoinfo = document.querySelector('#numb')
    var mesinfo = document.getElementById('numb2mes')
    var sexo = document.getElementsByName('check')
    //Data informada e sexo escolhido
    var txtres = document.querySelector('#res')
   
    //pega paragrafo de resposta e cria um pagrafrafo
    
    var genero = ''

    //----------
    var img = document.createElement('img')
    img.setAttribute('width', '450px')
    img.setAttribute('height', '280px')
    //criando um elemento img
    var p1 = document.createElement('p')
        if((anoinfo.value.length < 4 || anoinfo.value >= ano || anoinfo.value =='' || anoinfo.value.length >=5) ||
         (mesinfo.value=='' || mesinfo.value < 1 || mesinfo.value.length >=3 || mesinfo.value >12) ){
            alert('[ERRO] Informe valor valido!')
            
        }else if(sexo[0].checked) {
            var idade = verificaidade(mesinfo.value,anoinfo.value)
            genero  = 'Homem'
            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute('src', '_img/cri-h-removebg-preview.png')
                p1.innerHTML='Vá brincar!'
                
            }else if(idade >=12 && idade <=25){
                //jovem
                img.setAttribute('src', '_img/jov-h-removebg-preview.png')
                p1.innerHTML='Vá estudar!'
            }else if(idade >=26 && idade<=60){
                //Adulto
                img.setAttribute('src', '_img/adu-h.png')
                p1.innerHTML='Vá trabalhar!'
                
            }else{
                //idoso
                img.setAttribute('src', '_img/ido-h-removebg-preview.png')
                p1.innerHTML='Vá descansar!'
            }
            txtres.innerHTML=`Você tem ${idade} anos é ${genero}`
        }else if(sexo[1].checked){
            var idade = verificaidade(mesinfo.value,anoinfo.value)
            genero = 'Mulher'
            if(idade >= 0 && idade <12){
                //criança
                img.setAttribute('src', '_img/cri-m-removebg-preview.png')
                p1.innerHTML='Vá brincar!'
            }else if(idade >=12 && idade <=25){
                //jovem
                img.setAttribute('src', '_img/jov-m-removebg-preview.png')
                p1.innerHTML='Vá estudar!'
            }else if(idade >=26 && idade<=60){
                //Adulto
                img.setAttribute('src', '_img/adu-m.png')
                p1.innerHTML='Vá trabalhar!'
            }else{
                //idoso
                img.setAttribute('src', '_img/ido-m-removebg-preview.png')
                p1.innerHTML='Vá descansar!'
            }       
            txtres.innerHTML=`Você tem ${idade} anos é ${genero}`   
        }
    
    
    txtres.appendChild(p1)
    txtres.appendChild(img)
}

function verificaidade(mes, ano){
    var idade
    var mesatual = data.getMonth()
    mesatual += 1
    alert(`Mes info: ${mes}`)
    alert(`${mesatual}`)
    if(data.getMonth() < mes){
        this.idade = data.getFullYear()- ano
        return this.idade -= 1
    }else if(data.getMonth() > mes){
        this.idade = data.getFullYear()- ano
        return this.idade
    }

}