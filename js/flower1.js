

$("document").ready(function(){
	
	// color picking
	$("#color0").on("click", function(){
		console.log("click color 0");
		enable_screen2(0);
	});
	$("#color1").on("click", function(){
		console.log("click color 1");
		enable_screen2(1);
	});
	$("#color2").on("click", function(){
		console.log("click color 3");
		enable_screen2(2);
	});
	$("#color3").on("click", function(){
		console.log("click color 3");
		enable_screen2(3);
	});
});

function enable_screen2(num)
{
	window.open("flower_screen2.html?color=" + String(num), "_self");
}

