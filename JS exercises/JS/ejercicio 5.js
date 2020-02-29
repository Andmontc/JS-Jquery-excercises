// JavaScript Document
var numero=parseInt(prompt("ingrese el número"));
while(isNaN(numero) || numero<0){
	alert("Por favor ingrese un valor valido");
	numero=parseInt(prompt("ingrese el número"));
	}
if(numero%2===0){
	alert("El numero"+" "+numero+" "+"Es par");
    }else{
		alert("El numero"+" "+numero+" "+"Es impar");
		}
