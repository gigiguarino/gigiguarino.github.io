$(document).ready(function(){
	$('#content').load('email.html');
});

$('div#links a').click(function(){
		var page = $(this).attr('href');
		$('#content').html(page + '.html');




		return false;
});