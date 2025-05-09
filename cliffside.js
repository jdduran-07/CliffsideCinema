// add a food greeting to site visitors depending on time of day
	const time = new Date().getHours();
	let greeting;
	if (time < 11) {
	greeting = "Our breakfast is something you won't want to miss!";
	} else if (time < 17) {
	greeting = "Lunch with a matinee movie showing?";
	} else {
	greeting = "Nothing like dinner and a movie.";
}
	document.getElementById("foodgreet").innerHTML = greeting;


	// Display the last modified date of the page in the 'lastModifiedDate' element
	const lastModified = document.lastModified;
	document.getElementById("lastModifiedDate").innerHTML = "This page was last modified on: " + lastModified;




function validateForm() {
    // Clear previous error messages
    document.getElementById("errorMessages").innerHTML = "";

    // Get values of form fields
    var name = document.getElementById("myName").value;
    var email = document.getElementById("myEmail").value;
    var phone = document.getElementById("myPhone").value;

    // Basic validation
    if (name == "" || email == "" || phone == "") {
        document.getElementById("errorMessages").innerHTML = "Please fill out the 3 required fields.";
        return false; // reminder to fill out all 3 fields 
    }
    //use regExp to verify email doesn't belong to hotmail(constraint validation)
    var disallowedDomain = /@hotmail\.com$/i; //pg 239 plus w3 schools

    if (disallowedDomain.test(email)) {  //w3 schools
        document.getElementById("errorMessages").innerHTML = "Hotmail addresses are not allowed. Please use a different email.";
        return false;
    }
    // 4 fields approved - 
    return true;
}
