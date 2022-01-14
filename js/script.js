let dados = document.getElementsByTagName('input')
let resultado = document.getElementsByTagName('div')[2]
let btn = document.getElementsByTagName('input')[2]
btn.addEventListener('click', function(peso, altura){
    peso = Number(dados[0].value)
    altura = Number(dados[1].value)
    let imc = (peso / (altura ** 2)).toFixed(2)

    if (peso == '' || altura == '' || isNaN(imc)) {
        return resultado.innerHTML = `<p>Informe o peso e altura.</p>`
    } else {
        if (imc < 18.5) {
            return resultado.innerHTML = `<p>IMC = ${imc} - Abaixo do peso</p>`
        } else if (imc >= 18.5 && imc < 25) {
            return resultado.innerHTML = `<p>IMC = ${imc} - Peso normal</p>`
         } else if (imc >= 25 && imc < 30) {
            return resultado.innerHTML = `<p>IMC = ${imc} - Sobrepeso</p>`
         } else if (imc >= 30 && imc < 35) {
            return resultado.innerHTML = `<p>IMC = ${imc} - Obesidade grau I</p>`
         } else if (imc >= 35 && imc < 40) {
            return resultado.innerHTML = `<p>IMC = ${imc} - Obesidade grau II</p>`
         } else {
             return resultado.innerHTML = `<p>IMC = ${imc} - Obesidade grau III ou Mórbita</p>`
         }
    }
})