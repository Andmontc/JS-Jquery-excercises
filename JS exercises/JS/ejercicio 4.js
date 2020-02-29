var numero1=parseFloat(prompt("ingrese el primer valor"));
var numero2=parseFloat(prompt("ingrese el segundo valor"));
document.write("<h1> Los numeros impares entre"+" "+numero1+" "+"y"+" "+numero2+" "+"son:</h1>");
for(var i=numero1; i<=numero2; i++){
	var impar=i%2;
		if(impar!==0){
			document.write("<h2>"+i+"</h2>");
		}
}
