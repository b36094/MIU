$(document).ready(function(objPage){
	//The functions below can go inside or outside the pageinit function for the page in which it is needed.
	
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
	
	
	$myFirstForm.validate({
		//ignores the items that have the class "ignore" on them			
		ignore: ".ignore",
		invalidHandler: function() {},		
		submitHandler: function(){
						
			var data = $myFirstForm.serializeArray();
			var randomId = genRandomId();
			data.randomNum = randomId;			
			var jsonObj = JSON.stringify(data);
			localStorage.setItem(randomId,jsonObj);		
			$($myFirstForm)[0].reset();
			console.log(localStorage);
			var prsJSONObj = JSON.parse(jsonObj);
			console.log(prsJSONObj);
			window.location.reload('#addItem');
							
		}
		
	
	});
	
	//Refresh the '#displayData' page to update all the local store changes
	$('#displayDataButton').click(function(){
		window.location = '#displayData';	
		window.location.reload('#displayData');
	});
	
	//Clear local storage
	$('#clearLocal').click(function(){
		
		localStorage.clear();
		window.location.reload();	
	});
	
	//Call getData to display the local storage	
	getData();
	
			
}); //here ends $(document).ready();
	

//getData function starts here	
var getData = function (obj) {

	for(var i = 0, j = localStorage.length; i < j; i ++) {
		var newKey = localStorage.key(i);
		var newValue = localStorage.getItem(newKey);	
		var newObj = JSON.parse(newValue);
		var ulListView = $('#container').append('<ul data-role="listview" data-split-icon="minus" data-split-theme="c" data-inset="true" id="ulOrigin'+i+'"></ul>');
		var insideLi = $('#ulOrigin'+i).append('<li><a href="#"><img src="images/'+newObj[0].value+'.png"><h2>'+newObj[1].value+'</h2><p>'+newObj[0].value+'</p></a><a href = "#deleteObject" data-rel = "popup" data-position-to = "window" data-transition = "pop">Delete Entry</a></li>');		



	}


};			


var autofillData = function (){
	 
};

var genRandomId = function(){
	var randomId = Math.floor(Math.random() * 10000001);
	return randomId;
};

   		

