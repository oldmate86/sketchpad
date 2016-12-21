var t=0;

$(document).ready(function(){
	fillGrid(32);
	hoverColor();
	

});
	



function fillGrid(cols){
	for(r=0;r<cols;r++){
		for (var i = 0; i <cols; i++) {
		
			$('<div class="grid"><li class="a"></li></div>').appendTo('.container');
		
		};
	};

gridSize=$('.container').height()/ Math.sqrt((cols*cols));
$(".grid").height(gridSize);
$(".grid").width(gridSize);
};

function hoverColor(){
	$(".grid").hover(function(){
		$(this).css("background-color", "black");
	}, function(){
		$(this).css("background-color", "grey");	
	});

};
function button1(){
	$(".grid").css("background-color", "white");
};
function button2(){
	$(".grid").css("background-color", "white");
		x=0;
		while(x<1){
			var input=prompt("Please Enter The Grid Size You Want.. Example:16 returns a 16x16 grid");
				if(input>48){
					window.alert("Sorry, but if the grid is larger than 48x48 it makes the browser think to hard... so please try again");
				}
				else{
					x=2;
				};
		};
	$(".grid").remove();
	fillGrid(input);
	hoverColor();
};

function button3(){
	if(t===0){
		$(".grid").css("outline", "none");
		 t=1;
	}
	else{
		$(".grid").css("outline", "1px solid grey");
		 t=0;
	}	
	
		
};










	


