function carregar(){
    var mensagem = document.getElementById('msg');
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        imagem.src = '../Img/manha.jpg'
        document.body.style.background = '#56b0da'
    }
    else if(hora >= 12 && hora <= 18){
        imagem.src = '../Img/tarde.jpg'
        document.body.style.background = '#b1db46'
    }
    else{
        imagem.src = '../Img/noite.jpg'
        document.body.style.background = '#35322f'
    }
}