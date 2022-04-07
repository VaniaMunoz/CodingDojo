functioncopy myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
myBirthYearFunc (1980)
"Nací en 1980" 
// al llamr a la funcion ,me va a indicar que nací en 1980//

function myBirthYearFunc(EntradaAñoNacimiento){
    console.log("Nací en " + EntradaAñoNacimiento);
}
myBirthYearFunc(2006)
"Nací en 2006" 
// El console.log me indica que naci en 2006 //

function add(num1, num2){
        console.log("¡Sumando números!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        console.log(sum);
}
add(10,20)
¡sumando numeros!
num1 is: 10
num2 is:20
30
// El console.log(30) Me indica el resultado 30//
