const precoCombustivel = 4.90;

const kmPorLitro = 10;

const distanciaEmKm = 1500; 
 
const litroConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litroConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));






