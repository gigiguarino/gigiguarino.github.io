var page;

$(document).ready(function(){
	if (window.name != "")
	{
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
		$("#erase4game").css("display", "none");
		window.name = page + ".html";
		page = $(this).attr("href");
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
