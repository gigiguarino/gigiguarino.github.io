
var current_flower = 1;

$('body').click(function(){
	switch_img();
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

	$('.flower').attr('src', new_image);
}

