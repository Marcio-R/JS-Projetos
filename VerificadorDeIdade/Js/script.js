function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var result = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var sex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','../Img/BebeMas.jpg')
                document.body.style.background = '#56b0da'
            }
            else if (idade < 21){
                img.setAttribute('src','../Img/jovemMas.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src','../Img/adultoMas.jpg')
            }
            else{
                img.setAttribute('src','../Img/IdosoMas.jpg')
            }
        }
        else if(sex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','../Img/BebeFem.jpg')
                document.body.style.background = '#56b0da'
            }
            else if (idade < 21){
                img.setAttribute('src','../Img/jovemFem.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src','../Img/adultoFem.jpg')
            }
            else{
                img.setAttribute('src','../Img/IdosoFem.jpg')
            }
        }
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.style.textAlign = 'center'
        result.appendChild(img)
        
    }
}