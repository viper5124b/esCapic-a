function esCapicua(numero) {
  const texto = String(numero);
  const invertido = texto.split('').reverse().join('');
  return texto === invertido;
}

const resultado = document.getElementById('resultado');
resultado.innerHTML=
"12321 es capicúa: " + esCapicua(12321) + "<br>" +
"12345 es capicúa: " + esCapicua(12345) + "<br>" +
"98789 es capicúa: " + esCapicua(98789) + "<br>" +
"1234321 es capicúa: " + esCapicua(1234321) + "<br>" +
"12345678987654321 es capicúa: " + esCapicua(12345678987654321);