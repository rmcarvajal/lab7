/*
Ejercicio 6: Calculador de descuento
Crea una función llamada calcularDescuento(precio, porcentaje) 
que reciba el precio de un producto y un porcentaje de descuento, 
y retorne el precio final con el descuento aplicado. 
Si el porcentaje es mayor a 100 o menor que 0, debe retornar "Porcentaje no válido".
*/
function calcularDescuento(precio, porcentaje) {
    // TODO: Resolver
    if (100 < porcentaje){
        return "Porcentaje no válido."
    }
    else if (porcentaje < 0){
        return "Porcentaje no válido"
    }
    else {
        var fnl = (porcentaje / precio) * 100
        return precio - fnl
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 6")
console.log("-----------------------------------")
console.log(calcularDescuento(100, 20)); // 80
console.log(calcularDescuento(50, -5));  // "Porcentaje no válido"