$(document).ready(function(){
	$('#content').load('email.html');
});

$('div#links a').click(function(){
		var page = $(this).attr('href');
		$('#content').load(page + '.html');
		alert('help help' + page);




		return false;
});