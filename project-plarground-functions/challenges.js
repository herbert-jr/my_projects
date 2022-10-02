// Desafio 1

function compareTrue(parametro1, parametro2) {
  if (parametro1 === true && parametro2 === true) {
    return true;
  }
  return false;
}
// Desafio 2

function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(palavras) {
  let virgula = ', ';
  return palavras[palavras.length - 1] + virgula + palavras[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numbers) {
  let bigger = numbers[0];
  for (let index in numbers) {
    if (numbers[index] > bigger) {
      bigger = numbers[index];
    }
  }
  let contador = 0;
  for (let secondIndex in numbers) {
    if (numbers[secondIndex] === bigger) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayStrings = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayStrings.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayStrings.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayStrings.push('fizz');
    } else {
      arrayStrings.push('bug!');
    }
  }
  return arrayStrings;
}

// Desafio 9
function encode(phrase) {
  let novaFrase = phrase;
  novaFrase = novaFrase.replace(/a/gi, '1');
  novaFrase = novaFrase.replace(/e/gi, '2');
  novaFrase = novaFrase.replace(/i/gi, '3');
  novaFrase = novaFrase.replace(/o/gi, '4');
  novaFrase = novaFrase.replace(/u/gi, '5');

  return novaFrase;
}
function decode(phrase) {
  let novaFrase = phrase;
  novaFrase = novaFrase.replace(/1/g, 'a');
  novaFrase = novaFrase.replace(/2/g, 'e');
  novaFrase = novaFrase.replace(/3/g, 'i');
  novaFrase = novaFrase.replace(/4/g, 'o');
  novaFrase = novaFrase.replace(/5/g, 'u');
  return novaFrase;
}

// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  let tecnologia = tecnologias.sort();

  for (let index = 0; index < tecnologias.length; index += 1) {
    array.push({
      tech: tecnologia[index],
      name: nome,
    });
  }
  return array;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
