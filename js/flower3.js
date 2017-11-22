

var current_flower = 0;

// color types:
// 0 - orange
// 1 - pink
// 2 - purple
// 3 - blue
var color = 0;

// sky types
var sky = 0;

$("document").ready(function(){
	
	// info from query string passed in 
	color = getUrlVars()["color"];
	sky = getUrlVars()["sky"];

	// new button press
	$("#x").on("click", function(){
		current_flower = 0;
		enable_screen1();
	});
	$("#flower").on("click", switch_img);

	enable_screen3();
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

function enable_screen1()
{
	$("body").removeClass();
	window.open("flower_screen1.html", "_self");
}

function enable_screen3()
{
	var flower_source = "../images/flower/color" + String(color) + "/flower0.png";
	$("#flower").attr("src", flower_source);

	if (sky == 0)
	{
		$("body").addClass("background0");
	}
	else if (sky == 1)
	{
		$("body").addClass("background1");
	}
	else if (sky == 2)
	{
		$("body").addClass("background2");
	}
	else if (sky == 3)
	{
		$("body").addClass("background3");
	}
	else
	{
		// error
	}

	window.scrollTo(0, document.body.scrollHeight);
}


function switch_img()
{
	var new_image = "../images/flower/color" + String(color) + "/flower";
	var next_num = current_flower + 1;

	if (current_flower == 7)
	{
		new_image += "1.png";
		current_flower = 1;
	}

	else
	{
		new_image += String(next_num);
		new_image += ".png";
		current_flower = next_num;
	}

	$("#flower").attr("src", new_image);
}

