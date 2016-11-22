window.onload=manejarClics;

var cifra1="";
var cifra2;
var control=true;

function manejarClics() {
	
	var uno=document.getElementById("uno");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("dos");
	dos.addEventListener("click",function() {
								clicEn("2");
								});

	var mas=document.getElementById("mas");
	mas.addEventListener("click",function() {
								clicEn("+");
								});

	var igual=document.getElementById("igual");
	igual.addEventListener("click",calcular);

	/*var dos=document.getElementById("dos");
	dos.addEventListener("click",clicEnDos);*/


}

function clicEn(num){
	cifra1 +=num;

	var pantalla=document.getElementById("pantalla");
	pantalla.textContent=cifra1;

	/*if (control==true) {
		cifra1=num;
		control=false;
	}
	else{
		cifra2=num;
	}*/
}

function calcular(){
	var total=eval(cifra1);
	var pantalla=document.getElementById("pantalla");
	pantalla.textContent=total;
}
/*
function clicEnDos(){
	if (control==true) {
		cifra1=2;
		control=false;
	}
	else{
		cifra2=2;
	}
}*/

