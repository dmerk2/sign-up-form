// alert("hi");

$(document).ready(function(){
	$("#submitButton").on("click", function(){
		// Storing user input into variables
		name = $("#nameInput").val();
		phoneNumber = $("#phoneNumberInput").val();
		email = $("#emailInput").val(); 
		
		console.log(name, phoneNumber, email);
		
			$("#nameOutput").html(name);
			$("#phoneNumberOutput").html(phoneNumber);
			$("#emailOutput").html(email);

					// Saving ... to local storage
					localStorage.setItem('name', name);
					localStorage.setItem('phoneNumber', phoneNumber);
					localStorage.setItem('email', email);

					return false;
	});
});

//Shows whats saved to local storage
$("#nameInput").html(localStorage.getItem('name'));
$("#phoneNumberInput").html(localStorage.getItem("phoneNumber"));
$("#emailInput").html(localStorage.getItem('email'));
