var numero1 = parseInt(prompt("ingrese el primer numero"));
var numero2 = parseInt(prompt("ingrese el segundo numero"));
while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt("ingrese el primer numero"));
    numero2 = parseInt(prompt("ingrese el segundo numero"));
}
if(numero1>numero2){
 alert("el primer numero es mayor "+" "+numero1);}
else if( numero1===numero2){
 alert("los numeros son iguales"+" "+numero1+" "+"y"+" "+numero2);}
else if (numero1<numero2){
	alert("el numero 2 es mayor"+" "+numero2);}


		  