// Concept implemented by the JQuery Mobile Dev. team <--> Experimental phase. 
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

