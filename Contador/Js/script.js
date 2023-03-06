function contar(){
  let numeroIncial = document.getElementById('txtinicio');
  let numeroFinal = document.getElementById('txtfim');
  let numeroIni = Number(numeroIncial.value);
  let numeroFin = Number(numeroFinal.value);
  let resp = document.getElementById('res')

    if(numeroIni == '' || numeroFin == ''){
        
        resp.innerHTML = `A dados não estão preenchidos!`
    }
    else if(numeroIni > numeroFin ){
        resp.innerHTML = `Contando: `
        for (let contador = numeroIni; contador >= numeroFin; contador--) {
            resp.innerHTML +=  `${contador} \u{1f449}`
        }
        resp.innerHTML += `\u{1f3c1}`
    }
    else{
        resp.innerHTML = `Contando: `
        for (let contador = numeroIni; contador <= numeroFin; contador++) {
            resp.innerHTML +=  `${contador} \u{1f449}`
        }
        resp.innerHTML += `\u{1f3c1}`
    }
}