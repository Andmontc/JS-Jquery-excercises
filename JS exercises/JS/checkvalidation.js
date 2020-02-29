window.addEventListener("load",()=>{
function funcion(){
	var prueba =document.querySelector("#validacion");
	if(!prueba.checkValidity()){
		document.querySelector("#validacion").innerHTML= prueba.validationmessage;
	}else{
		document.querySelector("#tex").innerHTML= "Correcto";
	}
}
});