window.addEventListener("load",()=>{
var numeros=[45,62,1,89];
var mapeo=numeros.map((value)=>{
	return value;
});
var filtro=numeros.filter((value)=>{
	return value>60;
});
var ele=document.querySelector("#numeros");
ele.innerHTML=mapeo;
var elo=document.querySelector("#nummay");	
elo.innerHTML=filtro;
function may(arr){
	return Math.max.apply(null,arr);
}
var ma=document.querySelector("#mayor");
	ma.innerHTML=may(numeros);
function mini(arr){
	return Math.min.apply(null,arr);
}
var mi=document.querySelector("#menor");
	mi.innerHTML=mini(numeros);
function rando(min,max){
	return Math.floor(Math.random()*(max-min + 1)) + min;
}
	var nn=document.querySelector("#ran");
	var rr=document.querySelector("#rand");
	rr.addEventListener("click",()=>{
		nn.innerHTML=rando(1,20);
	});
});