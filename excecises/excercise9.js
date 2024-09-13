/*
Ejercicio 9: Conversor de temperaturas
Crea una función llamada convertirTemperatura(temperatura, escala) 
que reciba una temperatura y una escala ("C" para Celsius o "F" para Fahrenheit), 
y convierta la temperatura a la otra escala. Retorna la temperatura convertida. 
Si la escala es "C", convierte de Celsius a Fahrenheit. Si la escala es "F", convierte de Fahrenheit a Celsius.
*/
function convertirTemperatura(temperatura, escala) {
    // TODO: Resolver
    if (escala === "C"){
        var CtoF = temperatura * (9 / 5) + 32;
        return CtoF + " °F";
    }
    else if(escala === "F"){
        var FtoC = (temperatura - 32) * (5 / 9);
        return FtoC + " °C";
    }
}

console.log("-----------------------------------")
console.log("EJERCICIO 9")
console.log("-----------------------------------")
console.log(convertirTemperatura(0, "C"));  // 32
console.log(convertirTemperatura(32, "F")); // 0