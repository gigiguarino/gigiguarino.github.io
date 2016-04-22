$(document).ready(function(){
	$('#content').load('about.html');
});

$('div#links a').click(function(){
	var page = $(this).attr('href');
	$('#content').load(page + '.html');
	return false;
});