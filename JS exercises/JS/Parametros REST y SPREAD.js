function listadoFrutas(fruta1, fruta2, ...restoFrutas){
	console.log("fruta 1: ", fruta1);
	console.log("fruta 2: ", fruta2);
	console.log(restoFrutas);
}
var frutas=["Banano","pera"];
listadoFrutas(...frutas,"mora", "mango","uva", "Melon");