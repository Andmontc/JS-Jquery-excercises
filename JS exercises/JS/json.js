window.addEventListener("load",()=>{
var pelicula ={
	title : "Batman vs superman",
	year: "2017",
	pais: "USA",
};

var peliculas=[{
	title:"Avengers", year:"2019", pais:"Chibcha"}, pelicula
	];
var caja =document.querySelector("#movies");
var index;
for(index in peliculas){
	var peli=document.createElement("p");
	peli.append(peliculas[index].title+" - "+peliculas[index].year+" - "+peliculas[index].pais);
	caja.append(peli);
}
});