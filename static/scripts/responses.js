function getBotResponse(input) {
    //rock paper scissors
    if (input == "todays menu please") {
        return "plain bread,chicken bread,coke";
    } 
	if (input == "plain bread" ){
		return "How many would you like to have ";
    } else if (input == "chicken bread" ) {
        return "How many would you like to have";
    } else if (input == "coke" ) {
        return "How many would you like to have";
    }
	if(input=="1"){
		return "your total is Rs. 20,confirm you order?";
		
	} else if (input == "2" ) {
        return "your total is Rs. 40,confirm you order?";
    } else if (input == "3" ) {
        return "your total is Rs. 60,confirm you order?";
    }
	if(input=="yes")
	{
		window.location.href = "confirm.html";
	}
	
	

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}