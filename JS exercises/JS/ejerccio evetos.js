/* Formulario con campos nombre, apellido y edad
   Boton de submit
   Mostrar esos datos por pantalla a traves de un boton */
window.addEventListener("load",()=>{
	var form=document.querySelector("#formulario");
	var box=document.querySelector(".box");
	box.style.display="none";
	form.addEventListener("submit",()=>{
			var nombre=document.querySelector("#nombre").value;
			var apellido=document.querySelector("#Apellido").value;
			var edad=document.querySelector("#edad").value;
			box.style.display="block";
			var p_nombre=document.querySelector("#nom span");
			var p_apellido=document.querySelector("#ape span");
			var p_edad=document.querySelector("#ed span");
			p_nombre.innerHTML = nombre;
			p_apellido.innerHTML = apellido;
			p_edad.innerHTML = edad;
		/*	var info =[nombre,apellido,edad];
			var indice;
			for(indice in info){
				var datos=document.createElement("p");
				datos.append(info[indice]);
				box.append(datos);
			}*/
		//es otra forma de hacerlo pero la que esta activa es mas parchada
	});
	
});	