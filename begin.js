

$(document).ready(function(){
	$("#content").load(page + ".html", function(){
			$("#invisible").fadeIn("fast", function(){
				$("#content").fadeIn("slow");
			});
		});
})