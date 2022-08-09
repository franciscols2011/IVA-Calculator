public class Iva {

    public static void main(String[] args) {
        double precioIva = calcularIva(220);
        System.out.println(precioIva);
    }

    private static double calcularIva(double precio) {
        double iva = 0.21;
        double precioIva = precio * iva;
        double precioConIva = precio + precioIva;
        return precioConIva;
    }
}