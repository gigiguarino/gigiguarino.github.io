var page;

$(document).on("click", "#content a", function(){
	if ($(this).attr("class").split(' ')[1] == "invalid")
	{
		$("#invisible").css("display", "none");
		page = $(this).attr("href");
		$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn("fast", function(){
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
		$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn("fast", function(){
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
