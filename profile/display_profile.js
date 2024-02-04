"use strict";

// Function to execute when the document is ready
$(document).ready( () => {
    // Retrieve information from sessionStorage
    const {email , phone , postal , dob } = JSON.parse(sessionStorage.getItem("user"));
    
    // Check if any  information is missing
    if(!email || !phone || !postal || !dob){
        alert("There might be some error. Please try again"); // Alert the about  error
    }
    
    // Display information on the webpage
    $("#email").text(email);
    $("#phone").text(phone);
    $("#postal").text(postal);
    $("#dob").text(dob);
    
    // Event handler for clicking the back button
    $("#back").click( () => {
        history.back(); // Navigate back in the browser history
    }); // end of click()
    
}); // end of ready()
