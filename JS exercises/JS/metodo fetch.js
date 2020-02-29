window.addEventListener("load",()=>{
var soyYo=document.querySelector("#soyelputas");	
	    function TomaUsuario(){
		return fetch("https://reqres.in/api/users");
 		}
 		function TomaUnUsuario(){
	 	return fetch("https://reqres.in/api/users/2");
 		}
	
		TomaUsuario()
		.then(data=>data.json())
		.then(users =>{
		Listadousuarios(users.data);
		return Master();
		})
		.then(data=>{
		soyYo.innerHTML= data;
		console.log(soyYo);
		return TomaUnUsuario();	 
		})
		.then(data=>data.json())
		.then(user =>{
		MostrarUsuario(user.data);
		});
	
		function Master(){
			var yo = {
				nombre: 'Andres',
				apellido:'Montes',
				alias: "Dam"
			};
			return new Promise((resolve, reject) =>{
			setTimeout(()=>{
			var	yo_string= JSON.stringify(yo);
			if(typeof yo_string !=="string"||yo_string==="") {
					return reject("error");
				}else{
			     return resolve (yo_string);
				}
			},2000);
				
			});
		}
	
		function Listadousuarios(usuarios){
		usuarios.map((user,i) => {
		var nombre=document.createElement("li");
			nombre.innerHTML = i+". "+user.first_name+" "+user.last_name+" "+"e-mail:"+" "+user.email;
			var users=document.querySelector("#datos");
			users.append(nombre);
		});
		}
	
		function MostrarUsuario(user){
			var nombre=document.createElement("p");
			var avatar=document.createElement("img");
			nombre.innerHTML = user.first_name+" "+user.last_name+" "+"e-mail:"+" "+user.email;
			avatar.src= user.avatar;
			avatar.width = "100";
			var users=document.querySelector("#especifico");
			users.append(nombre);
			users.append(avatar);
		}
		});