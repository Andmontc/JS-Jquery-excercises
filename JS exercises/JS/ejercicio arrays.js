function mostrar(numero,texto =""){
	document.write("<h2>Los numeros "+texto+" "+"son:</h2>");
	numero.forEach((elemento,index)=>{
	document.write("<ul>");
    document.write("<li>"+elemento+"</li>");
	document.write("</ul>");
	});
	}
var arregloNum = new Array();
for(var i=0; i<=5; i++){	
arregloNum.push(parseInt(prompt("Ingrese los valores")));
}
	mostrar(arregloNum);
    arregloNum.sort(function(a,b){return a-b});
	mostrar(arregloNum,"ordenados");
	console.log(arregloNum);
	arregloNum.reverse();
	mostrar(arregloNum,"en reversa");
	document.write("<h2> La cantidad de elementos son: </h2>"+arregloNum.length);

var busca=parseInt(prompt("Ingrese el dato a buscar"));
var buscado =arregloNum.findIndex( buscado => buscado===busca);
if(buscado && buscado!==-1){
	document.write("<h2> Busqueda encontrada</h2>");
	document.write("<h3> la posición de la busqueda es </h3>"+" "+buscado);
}else{
	document.write("<h2> Busqueda no encontrada</h2>");
}
