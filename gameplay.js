
var current_flower = 0;

$("document").ready(function(){
	window.scrollTo(0, document.body.scrollHeight);
	if (typeof window.orientation !== 'undefined')
	{
		$(".flower").attr("src", "images/flower0.png");
	}
	else
	{
		$(".flower").attr("src", "images/flower00.png");
	}
	current_flower = 0;
	$("body").on("click", switch_img);
});



function switch_img()
{
	var new_image = "images/flower";
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

	$(".flower").attr("src", new_image);
}

