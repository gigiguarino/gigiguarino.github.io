
$("document").ready(function(){
	if (typeof window.orientation !== 'undefined')
	{
		// iphone/ipad/android
		// open flower animation
		window.open("templates/flower_screen1.html", "_self");
	}
	else
	{
		// desktop browser
		// open sudoku
		window.open("templates/sudoku.html", "_self");
	}
});