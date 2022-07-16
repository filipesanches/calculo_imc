function main() {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
      setResultado("Peso ou Altura, inválido", false);
      return;
    }

    const imc = getImc(peso, altura);
    //const classificacaoImc = getClassificaImc(imc);
    //const msg = `Seu IMC é ${imc} (${classificacaoImc})`;

    setResultado(imc, true);
  });

  /*
  function getClassificaImc(imc) {
    const classificacao = [
      "Abaixo do peso",
      "Peso Normal",
      "Sobrepeso",
      "Obesidade grau I",
      "Obesidade grau II",
      "Obesidade grau III",
    ];

    if (imc >= 40) return classificacao[5];
    if (imc >= 35) return classificacao[4];
    if (imc >= 30) return classificacao[3];
    if (imc >= 25) return classificacao[2];
    if (imc >= 18) return classificacao[1];
    if (imc < 18) return classificacao[0];
  }

  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }
  */
  function getImc(peso, altura) {
    const imc = (peso / altura ** 2).toFixed(2);
    function getClassificaImc(imc) {
      const classificacao = [
        "Abaixo do peso",
        "Peso Normal",
        "Sobrepeso",
        "Obesidade grau I",
        "Obesidade grau II",
        "Obesidade grau III",
      ];
  
      if (imc >= 40) return classificacao[5];
      if (imc >= 35) return classificacao[4];
      if (imc >= 30) return classificacao[3];
      if (imc >= 25) return classificacao[2];
      if (imc >= 18) return classificacao[1];
      if (imc < 18) return classificacao[0];
    }
    const classificacaoImc = getClassificaImc(imc);
    const msg = `Seu IMC é ${imc} (${classificacaoImc})`;
    return msg
  }

  function criaP(classe) {
    const p = document.createElement("p");
    p.classList.add(classe)
    return p;
  }

  function setResultado(msg, isValid) {
    const mensagem = document.querySelector("#mensagem");
    mensagem.innerHTML = "";
    const p = criaP("resultado");
    if (isValid) {
      p.classList.add("valido")
    } else {
      p.classList.add("invalido")
    }
    p.innerText = msg;
    mensagem.appendChild(p);
  }
}
addEventListener("load", main);
