

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
		console.log("click color 2");
		enable_screen2(2);
	});
	$("#color3").on("click", function(){
		console.log("click color 3");
		enable_screen2(3);
	});
	$("#color4").on("click", function(){
		console.log("click color 4");
		enable_screen2(4);
	});
	$("#color5").on("click", function(){
		console.log("click color 5");
		enable_screen2(5);
	});
	$("#color6").on("click", function(){
		console.log("click color 6");
		enable_screen2(6);
	});
	$("#color7").on("click", function(){
		console.log("click color 7");
		enable_screen2(7);
	});
	$("#color8").on("click", function(){
		console.log("click color 8");
		enable_screen2(8);
	});
});

function enable_screen2(num)
{
	window.open("flower_screen2.html?color=" + String(num), "_self");
}

