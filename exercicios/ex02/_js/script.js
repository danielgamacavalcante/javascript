function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoinfo = document.getElementById('txtano')
    var txt = document.querySelector('div#res')
    if(anoinfo.value.length < 4 || Number(anoinfo.value) > ano || anoinfo.value.length > 4 || anoinfo.value == ''){
        alert('[ERRO] Informe uma valor válido!')
    }else{
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoinfo.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked == true){
            genero = 'Masculino'
            if(idade >= 18 && idade <= 45){
                img.setAttribute('src', '_img/jov-h-removebg-preview.png')
            }else if(idade > 18 && idade <=60){
                img.setAttribute('src', '_img/adu-h.png')
            }else if(idade < 18){
                img.setAttribute('src', '_img/cri-h-removebg-preview.png')
            }else{
                img.setAttribute('src', '_img/ido-h-removebg-preview.png')
            }

        }else if(sexo[1].checked == true){
            genero = 'Feminino'
            if(idade >= 18 && idade <= 45){
                img.setAttribute('src', '_img/jov-m-removebg-preview.png')
            }else if(idade > 18 && idade <=60){
                img.setAttribute('src', '_img/adu-m.png')
            }else if(idade < 18){
                img.setAttribute('src', '_img/cri-m-removebg-preview.png')
            }else{
                img.setAttribute('src', '_img/ido-m-removebg-preview.png')
            }
        }
        //txt.style.txtAling = 'center'
       txt.innerHTML=`Idade: ${idade} e Genero: ${genero}`
       txt.appendChild(img)

       
       window.prompt()
    }
}
