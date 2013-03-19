$(document).bind('pageinit', function(){
	//Add a default value to the purchase date field
	$('#pubDate').val(new Date());

	//Capture the reset-link and assign it the form.reset
	$('#resetP').click(function(){
		alert("form has been reset");
		$(‘#firstForm’)[0].reset();
		})
		

	});
});

// Concept implemented by the JQuery Mobile Dev. Team <--> Experimental phase. 
// Refactoring for this project by: Andrei B.

$(function(){
			$('[data-role="list-divider"]').toggle(function(){
				$('.'+$(this).attr('data-link')).addClass('show');
				$(this).children().removeClass('ui-icon-plus').addClass('ui-icon-minus');
			},
		
			function(){
				$('.'+$(this).attr('data-link')).removeClass('show');
				$(this).children().removeClass('ui-icon-minus').addClass('ui-icon-plus');
    		});	
		});

    		

