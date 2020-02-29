function CColor(){
	console.log("Click");
	var bg= bot.style.background;
	if(bg==="blue"){
	bot.style.background = "red";
	}else{
		bot.style.background = "blue";
	}
	bot.style.padding = "10px";
	return true;
}
var bot=document.querySelector("#boton");
bot.addEventListener("click",()=>{
	CColor();
});
//button id="boton" onClick="alert('Chupate Esta');">Click Me</button> Siempre el texto dentro de un alert en un onclic va con comillas simples 
