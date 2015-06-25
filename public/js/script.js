$(document).ready(function() {
	//Date picker jQuery
	$(function() {
	    $( ".datepicker" ).datepicker();
	    $( "#format" ).change(function() {
	      $( ".datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
	    });
	  });
	console.log("This worked!!");
});