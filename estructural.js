function calcularIVA(precio, iva) {
  if (iva == 0) {
    return precio * 0.21;
  }
  return precio * iva;
}
var facturaSinIVA = [250];
var factura = facturaSinIVA.reduce(function (total, producto) {
  return (total += calcularIVA(producto, 0));
}, 0);
console.log(factura);
