$(document).ready(function(){
	
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
	
	//Clear local storage
	$('#clearLocal').click(function(){
		
		localStorage.clear();
		window.location.reload();	
	});
	
	//Call saveData function to display the local storage	
	outputData();
	
	//Call deleteItem function
	deleteItem();
			
}); //here ends $(document).ready();
	




//saveData function starts here	
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
		
		//var newValue = localStorage.getItem(newKey);	
		//var newObj = JSON.parse(newValue);
		//var $dynPage = ('<div data-role = "page" id = "dynPage'+i+'"><div data-role = "content"></div></div>');
		//$(document.body).append($dynPage);
		//var ulListView = $('#container').append('<ul data-role="listview" data-split-icon="minus" data-split-theme="c" data-inset="true" id="ulOrigin'+i+'"></ul>');
		//var insideLi = $('#ulOrigin'+i).append('<li><a href="#dynPage'+i+'"><img src="images/'+newObj[0].value+'.png"><h2>'+newObj[1].value+'</h2><p>'+newObj[0].value+'</p></a><a href = "#deleteObject" data-rel = "popup" data-position-to = "window" data-transition = "pop">Delete Entry</a></li>');		
		
		
		
	}
	
		
			
		//var dynPage = ('<div data-role = "page" id = "dynPage'+parsedObj.id+'"><div data-role = "content"></div></div>');
		//$(document.body).append(dynPage);
			
};
	
	
			

//saveData function 
var saveData = function () {
		
			//var randomId = genRandomId();
			//data.randomNum = randomId;			
			//var jsonObj = JSON.stringify(data);
			//localStorage.setItem(randomId,jsonObj);		
			//$($myFirstForm)[0].reset();
			//console.log(localStorage);
			//var prsJSONObj = JSON.parse(jsonObj);
			//console.log(prsJSONObj);
			window.location.reload('#addItem');
};
//delete item
var deleteItem = function (newKey) {
		$('#deleteButton').click(function(){
					alert("boo!");
					
					window.location.reload();
		});
		
};

var autofillData = function (){
	 
};

//genRandomId function creates a random number and returns the number 
var genRandomId = function(){
	var randomId = Math.floor(Math.random() * 10000001);
	return randomId;
};

   		

