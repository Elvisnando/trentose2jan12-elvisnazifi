$(document).ready(function()
{	
	//var baseAddress = "https://polar-coast-16373.herokuapp.com"
	var baseAddress = "http://127.0.0.1:5000"; 
	//post + Json
	$("#btn1").click(function(){
		$.post(baseAddress + "/showAstronauti",
		{
			ID: 1,
            
		},
		
		function(data, status){
			alert(" Status: " + status);
            console.log(data);
		},
		"json");
	});
	
	
	$("#btn2").click(function(){
		$.post(baseAddress + "/unas",
		{
			ID: 1,
            
		},
		function(data, status){
			alert(" Status: " + status);
            console.log(data);
		},
		"json");
	});   
    
	
	
	
	
});