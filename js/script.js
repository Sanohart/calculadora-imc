function start() {
  /*var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);*/

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcTier = document.querySelector('#imc-tier');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  var tier;
  if (imc >= 16 && imc < 17) {
    tier = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc < 18.5) {
    tier = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    tier = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    tier = 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    tier = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 40) {
    tier = 'Obesidade grau II';
  } else if (imc > 40) {
    tier = 'Obesidade grau III';
  } else {
    tier = 'Valor inválido';
  }

  imcResult.textContent = formattedImc;
  imcTier.textContent = tier;
}

start();
