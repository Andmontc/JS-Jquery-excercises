$("document").ready(function(){
// silder	
'use strict';
$(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 450
  });
});


// posts
	var posts =[
			{
				title: "Martin pampa magico",
				date: `publicado`+" "+ moment().date() +" "+"de"+" "+ moment().format("MMMM") +" "+ "del" +" "+ moment().format("YYYY"),
				content: "Hola, me llamo Martin Montes Nieto, nací el 30 de junio de 2017 en Cali, en la clinica IMBANACO. Me dicen el pampa mágico, la verdad no se porque ese apodo me lo pusieron mis papas, ya que me gusta mucho que me pampeen para dormir y supongo les traje mucha magia a su vida. Ya tengo 2 años, todavía no hablo pero me hago entender mucho, y soy muy inteligente ya que entiendo todo. Me gusta mucho comer, sobre todo pancakes, pescado, pollo, frutas y tambien queso y sandwich, pero lo que mas me gusta en la vida es mi tetero",
			},
			{
				title: "Cosas que me gustan",
				date: `publicado`+" "+ moment().date() +" "+"de"+" "+ moment().format("MMMM") +" "+ "del" +" "+ moment().format("YYYY"),
				content: "Me gusta comer remolacha, frutas, pan, pollo, mejor dicho de todo, tambien me gusta que me mimen todo el dia porque soy el mas mimado y que me canten todas las canciones que me gustan, tambien me gusta mucho no dejar dormir a mis papas en la noche , mentiras sino que a veces si me levanto y no dejo dormir no se porque, depronto es que todavia soy bebe",
			},
			{
				title: "Prueba 3",
				date: `publicado`+" "+ moment().date() +" "+"de"+" "+ moment().format("MMMM") +" "+ "del" +" "+ moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut pellentesque lorem, a ullamcorper risus. In ornare convallis ligula, dignissim tempor diam pharetra quis. Duis et dignissim ipsum. Proin ut nibh ut ipsum ultrices rutrum. In rhoncus porta velit et luctus. Aliquam iaculis odio a libero mattis ornare. Proin in lorem vitae magna malesuada porta. Pellentesque pretium sodales quam, ut vulputate ligula hendrerit sit amet.",
			},
			{
				title: "Prueba 4",
				date: `publicado`+" "+ moment().date() +" "+"de"+" "+ moment().format("MMMM") +" "+ "del" +" "+ moment().format("YYYY"),
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut pellentesque lorem, a ullamcorper risus. In ornare convallis ligula, dignissim tempor diam pharetra quis. Duis et dignissim ipsum. Proin ut nibh ut ipsum ultrices rutrum. In rhoncus porta velit et luctus. Aliquam iaculis odio a libero mattis ornare. Proin in lorem vitae magna malesuada porta. Pellentesque pretium sodales quam, ut vulputate ligula hendrerit sit amet.",
			},
	];
		posts.forEach((item,index) =>{
		var articulos =`
					<article class="post">  
	 		        <h2> ${item.title} </h2>
	 				<hr>
	 				<span class="date">${item.date}</span>
	 				<p>${item.content}</p>
					<a href="#" class="button-mas">Leer mas</a>
	 				</article>
					`;
	 $("#posts").append(articulos); 
}); 
	var Theme=$("#Theme");
	$("#blue").click(function(){
		Theme.attr("href","css/blue.css");
	});
	$("#green").click(function(){
		Theme.attr("href","css/green.css");
	});
	$("#yellow").click(function(){
		Theme.attr("href","css/yellow.css");
	});
	
	$(".subir").click(function(e){
		e.preventDefault();
		$("html, Body").animate({
			scrollTop:0}, 400);
		return false;
	});
	
	$("#logout").hide();
	$("#log form").submit(function(){
		var ingresa_name = $("#ingresa_name").val();
		localStorage.setItem("ingresa_name",ingresa_name);
		
	});
	
	var ingresa_name= localStorage.getItem("ingresa_name");
	
	if(ingresa_name!== null && ingresa_name!== "undefined"){
			var usuario=$("#usuario h2");
			usuario.html("Bienvenido"+" "+ ingresa_name);
					
			$("#log").hide();
			$("#logout").show();
			$("#logout").click(function(){
				localStorage.clear();
				location.reload();
								
			});
		} 
	
		
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	
	
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}
	
		
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	
});