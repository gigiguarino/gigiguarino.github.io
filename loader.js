var page;

$(document).ready(function(){
	if (window.name != "")
	{
		if (window.name == "games.html" ||
			window.name == "flower-fall.html" ||
			window.name == "battle-planet.html" ||
			window.name == "tic-tac-toe.html")
		{
			$("#erase4game").css("display", "none");
		}
		$("#content").load(window.name, function(){
			$("#invisible").fadeIn("slow", function(){
				$("#content").fadeIn("fast");
			});
		});
	}
	else
	{
		$("#content").load("about.html", function(){
			$("#invisible").fadeIn("slow", function(){
				$("#content").fadeIn("fast");
			});
		});
	}
})


$(document).on("click", "#content a", function(){
	if ($(this).attr("class").split(' ')[1] == "invalid")
	{
		$("#invisible").css("display", "none");
		$("#content").css("display", "none");
		if (window.name == "games.html")
		{
			$("#erase4game").css("display", "none");
		}
		page = $(this).attr("href");
		window.name = page + ".html";
		$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn(function(){
				$("#content").fadeIn("slow");
			});
		});
		return false;
	}
	else
	{
		return true;
	}
})

$('a').click(function(){
	if ($(this).attr("class") == "invalid")
	{
		$("#invisible").css("display", "none");
		$("#content").css("display", "none");
		page = $(this).attr("href");
		window.name = page + ".html";
		$("#content").load(page + ".html", function(){
			$("#erase4game").fadeIn("slow");
			$("#invisible").fadeIn(function(){
				$("#content").fadeIn("slow");
			});
		});
		return false;
	}
	else
	{
		return true;
	}
});
