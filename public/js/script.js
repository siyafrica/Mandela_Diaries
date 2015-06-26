$(document).ready(function() {
	//Date picker jQuery
	$(function() {
	    $( ".datepicker" ).datepicker();
	    $( "#format" ).change(function() {
	      $( ".datepicker" ).datepicker( "option", "dateFormat", $( this ).val() );
	    });
	  });

	$("#context").innerHtml(
		for (var entry = entries.length - 1; i >= 0; i--) {
			Things[i]
		};
		);
	console.log("This worked!!");
	console.log(entries);
});