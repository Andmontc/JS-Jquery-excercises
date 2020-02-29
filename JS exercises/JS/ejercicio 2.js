
var contador=0;
var suma=0;
do{
	var numero=parseFloat(prompt("introduzca valores hasta introducir un numero negativo o un texto"));
	if(isNaN(numero)){
		break;
	}else if(numero>0){
		var suma=suma+numero;
		contador++;
	}
	console.log(suma,contador);
	}while(numero>=0);
    alert("la suma de los numeros es "+" "+suma);
	alert("la media de los numeros es "+" "+(suma/contador));

