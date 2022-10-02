// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
//   if (phone[0] === 0 || phone[1] === 0){
//     return 'não é possível gerar um número de telefone com esses valores';
// }
  for (let index of phone) {
    if (index < 0 || index > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let soma = 1;
  for (let index = 0; index < phone.length; index += 1) {
    for (let indexCompare = index + 1; indexCompare < phone.length; indexCompare += 1) {
      if (phone[index] === phone[indexCompare]) {
        soma += 1;
      }
    }
  }
  if (soma > 4) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let formaValida = false;
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) && (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))) {
    formaValida = true;
  }
  return formaValida;
}

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let cont = 0;
  for (let index in numbers) {
    cont += parseInt(numbers[index], 10);
  }
  if (cont === 1) {
    return '1 copo de água';
  }
  return `${cont} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
