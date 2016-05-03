var page;

$(document).ready(function(){
	if (window.name != "")
	{
		$("#content").load(window.name, function(){
			$("#invisible").fadeIn("slow", function(){
				$("#content").fadeIn("fast");
				$(window).scrollTop(0);
			});
		});
	}
	else
	{
		$("#content").load("about.html", function(){
			$("#invisible").fadeIn("slow", function(){
				$("#content").fadeIn("fast");
				$(window).scrollTop(0);
			});
		});
	}
})


$(document).on("click", "#content a", function(){
	if ($(this).attr("class").split(' ')[1] == "invalid")
	{
		$("#invisible").css("display", "none");
		$("#content").css("display", "none");
		page = $(this).attr("href");
		window.name = page + ".html";
		$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn(function(){
				$("#content").fadeIn("slow");
				$(window).scrollTop(0);
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
			$("#invisible").fadeIn(function(){
				$("#content").fadeIn("slow");
				$(window).scrollTop(0);
			});
		});
		return false;
	}
	else
	{
		return true;
	}
});
