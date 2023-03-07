function calcular(){
    let number = document.getElementById('txtnumero')
    let tab = document.getElementById('seltabu')
    let txtnum = Number(number.value);

    if(number.value == ''){
        alert('Por favor, digite um número!')
        tab.innerHTML = '';
    }
    else{
        
        tab.innerHTML = '';
        for (let index = 0; index <= 10; index++) {
            let item = document.createElement('option')
            item.text = `${txtnum} x ${index} = ${txtnum * index}`
            tab.appendChild(item)
        }
    }
}