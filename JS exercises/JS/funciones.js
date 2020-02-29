// esto es con parametro opcional y 1 funcion
//function sumate(numero1, numero2, show = false) {
	//if(show === false){
	//console.log("la suma es :"+" "+(numero1+numero2));
	//}else{
	//document.write("la suma es :"+" "+(numero1+numero2));
//}
//}
//sumate(7,15);
//sumate(10,24,true);
function porConsola(numero1, numero2){
	console.log("la suma es :"+" "+(numero1+numero2));
}
function porPantalla(numero1, numero2){
	document.write("la suma es :"+" "+(numero1+numero2));
}
function sumate(numero1, numero2, show= false){
	if(show === false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
	return true;
}
sumate(15,3);
sumate(25,17,true);