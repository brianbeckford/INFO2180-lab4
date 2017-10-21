window.onload = clap;

var being;



	
/*function lol(){
	document.getElementById("boundary1").classList.add("youlose");
};
*/


function lol2(){
	being = false;
	var m = document.getElementsByClassName("boundary");
	var x;

	for(x = 0; x < m.length; x++) {
		m[x].classList.add("youlose");
	}
};



function clap(){
	//document.getElementById("boundary1").addEventListener("mouseover", lol);
	//document.querySelector(".boundary").addEventListener("mouseover", lol2);


	

	var p = document.querySelectorAll(".boundary");
	var i;

	for(i = 0; i < p.length; i++ ) {
		p[i].addEventListener("mouseover", lol2);
		
	}


	var s = document.getElementById("start");
	s.addEventListener("click",reset);
	s.addEventListener("mouseover",working);
	being = true;


	
	var e = document.getElementById("end").addEventListener("mouseover", win);

	
	
	


};



function win(){
	if(being == true){
		var stat = document.getElementById("status").innerHTML = "You Win!";
		//alert("You win!");
	}else{
		var stat = document.getElementById("status").innerHTML = "You Lose!";
	}
	
}




/*function resetwork(){
	being = true;
	reset;
}*/


function reset(){
	being = true;
	var again = document.getElementsByClassName("boundary");
	var n;
	document.getElementById("status").innerHTML = "Move your mouse over the" + '"S"' + "to begin.";

	for (n = 0; n<again.length; n++){
		
		again[n].classList.remove("youlose");

	}

	
	
}


function working(){
	document.getElementById("start").addEventListener("mouseleave", lol2);
}


/*function lose(){
	on
}*?

//console

/*if(boundary.hasClass("youlose"){

	}*/






