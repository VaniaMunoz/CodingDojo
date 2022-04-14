Fragmento de código 1 
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
    no existe una variable var para cumplir la funcion return
    result  =   hello,Dojo
*/

Fragmento de código 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
    Variables   Datos
    result  =   hello(),result is 15

*/

Fragmento de código 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
    Variables Datos
    result  =   numPlus(3); =   num is 3 ,result is 18

*/

Fragmento de código 4
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);<div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>
/*
    variables datos
    num     =   15;
    result  =   logAndReturn(10);   =   [15,10,10,15]
*/

Fragmento de código 5
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*
    variables datos
    num =   15;
    result  =  timesTwo(10); =  [15,10,20,15]
*/


Fragmento de código 6
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
    variables datos
    timesTwoAgain(3) + timesTwoAgain(5) [result is 16] 
    result  = ,num is 3,num is 5
*/


Fragmento de código 7
function sumNums(num1, num2) {  
   return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))
/*
    no existe una variable var para cumplir la funcion return
    result =   [5,8]
*/


Fragmento de código 8
function printSumNums(num1, num2) {
   console.log(num1);   
   return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))
/*
    no existe una variable var para cumplir la funcion return
    result  =   [2,5,3,8]
*/

Fragmento de código 9
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
    variables datos
    sum     =   num1 + num2;
    result  =   sumNums(2,3) + sumNums(3,5); result is 13 ,sum is 5, sum is 8
*/


Fragmento de Código 10 
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
    variables datos 
    sum     =   num1 + num2;
    result  =   sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
    
*/