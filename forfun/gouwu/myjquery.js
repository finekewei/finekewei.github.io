$(document).ready(function(){
	$(".xuni").dblclick(function(event){
	    event.stopPropagation();
	});
	$(".zhenshi").dblclick(function(event){
		event.stopPropagation();
	});
	$("#people_sz").dblclick(function(event){
		event.stopPropagation();
	});
	$("#people_sz").click(function(){
		$("#logo_sz").toggle();
	});
});