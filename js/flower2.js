

// color types:
// 0 - red
// 1 - orange
// 2 - yellow
// 3 - pink
// 4 - white
// 5 - green
// 6 - purple
// 7 - blue
// 8 - black
var color = 0;


$("document").ready(function(){
	
	// read the query string for the 
	// color value
	color = getUrlVars()["color"];

	// sky picking
	$("#sky0").on("click", function(){
		console.log("click sky 0");
		enable_screen3(0);
	});
	$("#sky1").on("click", function(){
		console.log("click sky 1");
		enable_screen3(1);
	});
	$("#sky2").on("click", function(){
		console.log("click sky 2");
		enable_screen3(2);
	});
	$("#sky3").on("click", function(){
		console.log("click sky 3");
		enable_screen3(3);
	});
	$("#sky4").on("click", function(){
		console.log("click sky 4");
		enable_screen3(4);
	});
	$("#sky5").on("click", function(){
		console.log("click sky 5");
		enable_screen3(5);
	});
	$("#sky6").on("click", function(){
		console.log("click sky 6");
		enable_screen3(6);
	});
	$("#sky7").on("click", function(){
		console.log("click sky 7");
		enable_screen3(7);
	});
	$("#sky8").on("click", function(){
		console.log("click sky 8");
		enable_screen3(8);
	});
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function enable_screen3(num)
{
	window.open("flower_screen3.html?color=" + color + "&sky=" + String(num), "_self");
}


