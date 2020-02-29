// JavaScript Document
var numero1=parseFloat(prompt("Ingrese el primer valor"));
var numero2 =parseFloat(prompt("Ingrese el primer valor"));
while(isNaN(numero1)||isNaN(numero2)){
	  alert("Valor equivocado, ingrese los valores nuevamente");
      var numero1=parseFloat(prompt("Ingrese el primer valor"));
      var numero2 =parseFloat(prompt("Ingrese el primer valor"));
	}
var menu=parseInt(prompt("Que operación desea realizar:\n 1. Suma \n 2.Resta \n 3. multiplicación\n 4. División"));
var suma=0;
var resta=0;
var multi=0;
var div=0;
switch(menu){
	case menu=1: suma=numero1+numero2;
	     document.write("La suma entre"+" "+numero1+" "+"y"+" "+numero2+" "+"es:"+suma);break;
	case menu=2: resta=numero1-numero2;
	 	 document.write("La resta entre"+" "+numero1+" "+"y"+" "+numero2+" "+"es:"+resta);break;
	case menu=3: multi=numero1*numero2;
		 document.write("La multipliación entre"+" "+numero1+" "+"y"+" "+numero2+" "+"es:"+multi);break;
	case menu=4:if(numero1>numero2){
		 div=numero1/numero2;
		 document.write("La división entre"+" "+numero1+" "+"y"+" "+numero2+" "+"es:"+div);break;
	     }else{
			alert("la división no se puede realizar");
		 }
}

