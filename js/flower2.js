

// color types:
// 0 - orange
// 1 - pink
// 2 - purple
// 3 - blue
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


