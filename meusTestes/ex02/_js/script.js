function slide1(){
    document.getElementById('slideid').src="_img/harrybanner.webp";
    document.querySelector('#linkbanner').href="https://www.wizardingworld.com/"
    document.getElementById('txtimg').innerHTML='Novo filme do Harry Potter'
    setTimeout("slide2()", 2000)
    }

function slide2(){
    document.querySelector('#slideid').src ="_img/covidbanner.webp"
    document.querySelector('#linkbanner').href='https://covid.saude.gov.br/'
    document.getElementById('txtimg').innerHTML='Vacinas contra a Covid'
    setTimeout('slide3()', 2000)
    
}

function slide3(){
    document.querySelector('#slideid').src="_img/gotinhabanner.jpg"
    document.querySelector('#linkbanner').href="https://www.gov.br/saude/pt-br"
    document.getElementById('txtimg').innerHTML='Zé gotinha ataca novamente'
    setTimeout('slide4()', 2000)
}

function slide4(){
    document.querySelector('#slideid').src="_img/maesbanner.png"
    document.querySelector('#linkbanner').href='https://vidasaudavel.einstein.br/saude-da-mulher/'
    document.getElementById('txtimg').innerHTML='Mães em foco'
    setTimeout('slide1()', 2000)
}