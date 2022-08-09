function calcularIVA(precio, iva) {
  if (iva == 0) {
    return precio * 0.21;
  }
  return precio * iva;
}
var facturaSinIVA = [40, 2.5, 200];
var factura = facturaSinIVA.reduce(
  (total, producto) => (total += calcularIVA(producto, 0)),
  0
);
console.log(factura);
