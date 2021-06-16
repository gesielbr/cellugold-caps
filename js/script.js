// Obtém a data/hora atual
var data = new Date();
// Guarda cada pedaço em uma variável
var dia = data.getDate(); // 1-31
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano4 = data.getFullYear(); // 4 dígitos
var str_data =
  dia +
  "/" +
  (data.getMonth() < 9 ? "0" : "") +
  (data.getMonth() + 1) +
  "/" +
  ano4;

//Número Aleatório
var random = function (start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
};
var quantidadeAleatoria = random(15, 25);

$(document).ready(function () {
  $(".quantidade").append(quantidadeAleatoria);
});
