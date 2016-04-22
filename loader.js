var page;

$('a').click(function(){
	if ($(this).attr("class") == "invalid")
	{
		$("#invisible").css("display", "none");
		page = $(this).attr("href");
		$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn("slow");
		});
		return false;
	}
	else
	{
		return true;
	}
});
