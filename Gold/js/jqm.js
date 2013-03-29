$(document).on('pageshow', '#mainPage', function(){
		$(document).off('click').on('click', '[data-role="list-divider"]', function(){
			if(!$('.'+$(this).attr('data-link')).hasClass('show')) {
				$('.'+$(this).attr('data-link')).addClass('show');
				$(this).children().removeClass('ui-icon-plus').addClass('ui-icon-minus');			
			} else {
				$('.'+$(this).attr('data-link')).removeClass('show');
				$(this).children().removeClass('ui-icon-minus').addClass('ui-icon-plus');			
			}
		});

}); //here ends $(document).ready();	
	
$(document).on('pageinit', '#addItem', function(){	
	//function to parse the form
	var $myFirstForm = $('#firstForm');
	
	//access the validation property (plugging)
	$myFirstForm.validate({
		//ignores the items that have the class "ignore" on them			
		ignore: ".ignore",
		invalidHandler: function() {},		
		submitHandler: function(randomId){
		
		//serialize the form data into an object 
		var data = $myFirstForm.serializeArray();
		
		//stringify the data from the form object
		var jsonObj = JSON.stringify(data);
		
		//add a random number for the key
		var randomId = genRandomId();
		
		//add the string conversion to the localStorage with a key-value
		localStorage.setItem(randomId,jsonObj);
		
		//reset the form after localStorage insertion
		$($myFirstForm)[0].reset();
		
		//refresh localStorage
		window.location = '#displayInfo';
				
		}
	});
		
	//Refresh the '#displayData' page to update all the local store changes
	$('#displayDataButton').click(function(){
		
		//tranports to displayData
		window.location = '#displayData';	
		
		//refreshes displayData
		window.location.reload('#displayData');
	});
}); //here ends $(document).ready();
	
	
$(document).on('pageinit', '#displayData', function(){
	
	//Clear local storage
	$('#clearLocal').click(function(){
		
		localStorage.clear();
		window.location.reload();	
	});
	
	//Call saveData function to display the local storage	
	outputData();
	
	//Check all the <ul> tags in the '#container' and choose the one that's being clicked on
	$('#container').on('click', 'ul', function(){
		
		alert("Entry ID: "+this.id);
		
		
	});			
}); //here ends $(document).ready();
	




//outputData function starts here	
var outputData = function () {
	
	for(var i = 0, j = localStorage.length; i < j; i ++) {
		
		//retrieve the key of the (i) position
		var storedKey = localStorage.key(i);
		
		//retrieve the value under the retrieved (i) key
		var storedObj = localStorage.getItem(storedKey);
		
		//parse the obj. to have access to its properties (name, length, category, etc.)
		var parsedObj = JSON.parse(storedObj);
		
		//add a localStorageId property to the parsed obj
		parsedObj.id = storedKey;
		
		//create an html div-container with the page id ulOrigin + local Storage id
		var ulListView = $('#container').append('<ul data-role="listview" data-split-icon="minus" data-split-theme="c" data-inset="true" id="ulOrigin'+parsedObj.id+'"></ul>');
		
		//complete the list by adding the <li> element inside of the <ul>
		var insideLi = $('#ulOrigin'+parsedObj.id).append('<li><a href="#li'+parsedObj.id+'"><img src="images/'+parsedObj[0].value+'.png"><h2>'+parsedObj[1].value+'</h2><p>'+parsedObj[0].value+'</p></a><a href = "#deleteObject" data-rel = "popup" data-position-to = "window" data-transition = "pop">Delete Entry</a></li>');	

		insideLi.listview().listview('refresh');
		
		
		//keep here for reference
		//window.location.reload('#addItem');
		console.log(parsedObj);	
	}
	
		
};
	
//genRandomId function creates a random number and returns the number 
var genRandomId = function(){
	var randomId = Math.floor(Math.random() * 10000001);
	return randomId;
};


//targetObj function 

var targetObj = function (id) {
	
	$(id).click(function(){
		alert(id);
	});
};	

