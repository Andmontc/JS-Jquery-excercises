window.addEventListener("load",()=>{
	// formulario que me permita añadir peliculas
	var form=document.querySelector("#peliculas");
	form.addEventListener("submit",()=>{
		var peli= document.querySelector("#peli").value;
		if(peli.length>=1){
			localStorage.setItem(peli,peli);
		}
		});
	var lista=document.querySelector("#añade");
		var i;
		for (i in localStorage){
			if(typeof localStorage[i] === "string"){
				var li=document.createElement("li");
				li.append(localStorage[i]);
				lista.append(li);
			}
		}
	var formb=document.querySelector("#borrapeli");
	formb.addEventListener("submit",()=>{
		var peli= document.querySelector("#peliborra").value;
		if(peli.length>=1){
			localStorage.removeItem(peli,peli);
		}
		});
	});
	