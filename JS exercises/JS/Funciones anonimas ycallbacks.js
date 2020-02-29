function sumame(numero1, numero2, sumaYmuestra, sumaPordos){
	var sumar=numero1+numero2;
	sumaYmuestra(sumar);
	sumaPordos(sumar);
	return sumar;
}
sumame(98,63,dato =>{
	console.log("la suma es: ", dato);
},dato =>{
	console.log("la suma por dos es: ", (dato*2))
});