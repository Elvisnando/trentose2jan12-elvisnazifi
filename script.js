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
		$.post(baseAddress + "/sellItem",
		{
			ID: 1,
            size : "S",
            colour: "blue"
		},
		function(data, status){
			alert("ID: " + data.ID + 
				  "\n type: " + data.type +
				  "\n size: " + data.size +
				  "\n quantity: " + data.quantity +
                  "\n colour: " + data.colour +
                  "\n price: " + data.price +
                  "\n season: " + data.season +
				  "\n Status: " + status);
		},
		"json");
	});   
    
	
	
	
	
});