let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resp = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }
    else{
        return false;
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option');
       item.text = `Valor ${num.value} adicionado.`
       lista.appendChild(item)
       resp.innerHTML = ''
    }
    else{
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
   if(valores == ''){
    alert('Adicion valores antes de finalizar')
   }
   else{
    let maior = valores[0]
    let menor = valores[0]
    let tot = valores.length;
    let soma = 0
    let media = 0
    for (const pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    media = soma / tot;
    resp.innerHTML = ''
    resp.innerHTML += `<P>Ao todo, temos ${tot} números cadastrados. </p>`
    resp.innerHTML += `<P>O maior valor encontrado é ${maior}. </p>`
    resp.innerHTML += `<P>O menor valor encontrado é ${menor}. </p>`
    resp.innerHTML += `<P>Há soma de todos os valores é ${soma}. </p>`
    resp.innerHTML += `<P>Há média dos valores é ${media}. </p>`
   }
}