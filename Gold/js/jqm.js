$(document).on('pageinit', function(){
	//code needed for home page goes here
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
	//addItem page code goes here
	
	//function to parse the form
	
	var $myFirstForm = $('#firstForm');
	
	//ignores the items that have the class "ignore" on them	
	$myFirstForm.validate({
		ignore: ".ignore",
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = $myFirstForm.serializeArray();
			var randomId = genRandomId();
			data.randomNum = randomId;			
			var jsonObj = JSON.stringify(data);
			localStorage.setItem(randomId,jsonObj);		
			console.log(localStorage);
			console.log(randomId);
			displayData();
			alert("Data was saved in the local storage!");
		}
	
	});
	
});	
		
//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var   displayData = function(){
		$.post("#displayInfo", { name: "John", time: "2pm" } );
};

var genRandomId = function(){
	var randomId = Math.floor(Math.random() * 10000001);
	return randomId;
};
	
 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};



    		

