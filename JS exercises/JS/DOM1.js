/*var color= parseInt(prompt("Que color de fondo desea\n 1. Azul\n 2.Rojo\n 3.Verde\n 4.Negro"));
while(isNaN(color)||color<1||color>4){
	  alert("Color no valido");
	  var color= parseInt(prompt("Que color de fondo desea\n 1. Azul\n 2.Rojo\n 3.Verde\n 4.Negro"));
}
var show=document.getElementById("caja");
switch(color){
	case color=1: show.style.backgroundColor="Blue"; 
				  show.style.color="white"; break;
	case color=2: show.style.backgroundColor = "red";
				  show.style.color="white"; break;
	case color=3: show.style.backgroundColor = "green"; 
				  show.style.color="white"; break;
	case color=4: show.style.backgroundColor = "Black"; 
				  show.style.color="white"; break;
}
/*
var show = document.getElementById("caja");
	show.style.backgroundColor="red";
*/
var divs=document.getElementsByClassName("caja");//Siempre que utilice una variable con un metodo get es un arreglo, si la voy a usar en un for in o alguna operacion lo debo hacer nombreVariable[]
var valor;
for(valor in divs){
	if(divs[valor].className==="caja"){
		divs[valor].style.color ="white";
		divs[valor].style.backgroundColor = "blue";
	}
	
}