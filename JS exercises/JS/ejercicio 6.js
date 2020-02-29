var numero=parseInt(prompt("Ingrese un numero"));
document.write("<h2>La tabla de multiplicar del"+" "+numero+" "+"es:<br/>");
for(var i=1; i<=10; i++){
	var tabla=numero*i;
	document.write(i+"*"+numero+"="+" "+tabla+"<br/>");
}